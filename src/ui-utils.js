import * as R from "ramda";
import { PAGE_ACTION_TYPES, xpbFrameworkPayload } from "./constant.js";
import AnsiRegex from "ansi-regex";
import { updateImageUrls } from "./updateImageSrc.js";
import cheerio from "cheerio";
import { v4 as uuidv4 } from "uuid";
import { parseCSS, parseHTML } from "./Parser.js";
import { call } from "./http.js";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import fs from "fs";
import css2xpath from "css2xpath";
import Url from 'url';
import { extractImageMetadata, extractNodeAttribute, extractTextNodeMetaData } from "./pi-utils.js";
import { uploadFile } from "./cms-utils.js";

export function appendSpecialCharacters(selector) {
  const specialCharactersRegex = /[+]/g;
  return selector.replace(specialCharactersRegex, "\\$&");
}

export const getNodeByXPath = (page, xpath) => page.$("xpath/" + xpath);

export const getNodeByXPathTimeout = (page, xpath, timeout = 5000) =>
  page.waitForXPath(xpath, { timeout });

export const getCurrentNodeContent = (page, node) =>
  page.evaluate((el) => el.textContent, node);

export const getPageUrl = (page) => page.url();

export const getNodeName = async(page, node) =>
  await page.evaluate((element) => element.tagName, node);

export const getPageWindowHandle = async (page) =>
  await page.evaluateHandle(() => window);

export const getCurrentPageBody = (page) =>
  page.evaluate(() => document.body.innerHTML);

export const getNodeInnerHTML = (page, node) =>
  page.evaluate(() => document.body.innerHTML);

export async function getXPathFromCSSPath(csspath) {
  // const modCss = escapeCSS(csspath)
  const xpath = css2xpath(csspath)
  console.log("modCss", xpath, " original", csspath)
  return xpath
}  

export const loadPage = async (url, browser, timeout = 600000) => {
  const page = await browser.newPage();
  page.uniqueId = Date.now();

  // console.log(page.uniqueId, "opening new page", url);

  await page.setDefaultNavigationTimeout(timeout);
  await page.goto(url);
  // await page.waitForNetworkIdle();
  // await page.waitForNavigation();
  
  // page.on("load", () => {
  //   const content = `
  //   *,
  //   *::after,
  //   *::before {
  //       transition-delay: 0s !important;
  //       transition-duration: 0s !important;
  //       animation-delay: -0.0001s !important;
  //       animation-duration: 0s !important;
  //       animation-play-state: paused !important;
  //       caret-color: transparent !important;
  //       animation: none
  //   }`;

  //   page.addStyleTag({ content });
  // });
  return page;
};

export const loadAndCrawlPage = async (page) => {
  const pageTitle = await page.title();

  // console.log("page title: ", pageTitle);

  const pageBody = await cleanAndGetPageBody(page);

  // console.log("Static HTML Body is parsed");

  const pageCSS = await getCleanedCSS(page);

  // console.log("CSS is parsed");

  return {
    pageBody,
    pageTitle,
    pageCSS,
  };
};

const getCleanedCSS = async (page) => {
  const cssFiles = await page.evaluate(() => {
    const links = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    );
    const cssUrls = links.map((link) => link.href);
    return cssUrls;
  });

  let cssContent = "";

  for (let file of cssFiles) {
    cssContent = cssContent + (await call(file));
  }

  const inlineStyles = await page.evaluate(() => {
    const headElement = document.head;
    const inlineStyleTags = headElement.querySelectorAll("style");

    let inlineStylesString = "";
    for (const styleTag of inlineStyleTags) {
      const styleContent = styleTag.textContent;
      inlineStylesString += styleContent;
    }
    return inlineStylesString;
  });

  cssContent += inlineStyles;
  // cssContent = await updateImageUrls(cssContent, url)
  const { parsedCssData } = await parseCSS(cssContent);

  return { parsedCssData, originalCSS: cssContent };
};

const cleanAndGetPageBody = async (page) => {
  const originalContent = await getCurrentPageBody(page);
  const bodyContent = await cleanupHTMLContent(page, originalContent);

  // console.log("HTML Cleanup is done");

  const { parsedHtmlData } = await parseHTML(bodyContent);

  return {
    parsedHtmlConfig: parsedHtmlData,
    htmlContent: bodyContent,
    originalContent,
  };
};

export const blockRequests = async (page, block = false) => {
  await page.setRequestInterception(true);

  if (block) {
    await page.on("request", async (request) => {
      // console.log("request is being made to ", request.resourceType(), request.url(), block);

      if (block && request.resourceType() === "document")
        return await request.abort();

      // console.log("Requests are not blocked");

      if (request.isInterceptResolutionHandled()) return;

      return request.continue();
    });
  }
};

// export const clickOnElementAndGetNavStatus = async (page, element) => {
//     const [_, navigation] = await Promise.allSettled([
//         element.click(),
//         page.waitForNavigation({ timeout: 500 }),
//       ]);

//     return navigation.status === 'fulfilled';
// };

export const runActionOnElementAndGetNavStatus = async (page, actionBlock) => {
  const url = await getPageUrl(page);
  await actionBlock();
  // const [navigation] = await Promise.allSettled([
  //   page.waitForNavigation({ timeout: 10000 }),
  //   actionBlock()
  // ]);

  // const status = navigation.status === "fulfilled";
  // if(!status) {
    try {
      return !(await page.evaluate(() => location.href) === url);
    } catch(er) {
      return true;
    }
    
  // }
  // return status;
};

export const performActionsOnPage = async (page, actions) => {
  console.log(page.uniqueId, "performing actions: ", actions);
  // await page.waitForTimeout(2000);
  try {
    for (const a of actions) {
      const element = await getNodeByXPathTimeout(page, a.xpath);
      if (a.type === PAGE_ACTION_TYPES.HOVER) {
        await element.hover();
        // await page.waitForNetworkIdle();
      }
      if (a.type === PAGE_ACTION_TYPES.CLICK) {
        await element.click();
        // await page.waitForNetworkIdle();
      }
    }
  } catch (error) {
    console.log('Error in perform action on page', error)
  }
};

export const closePage = async (browser, page) => {
  try {
    await page.waitForNetworkIdle();
  } catch (err) {}

  await page.close();
};

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function extractLinkPath(link) {
  const parsedUrl = new URL(link);
  return parsedUrl.pathname;
}

export const cleanupHTMLContent = async (page, content) => {
  content = content.replace(AnsiRegex(), "");
  // content = await updateImageUrls(content, url);
  content = updateIdAutomatically(content);
  content = await cleanPageBodyForReact(page, content);
  return content;
};

export const isReactPage= async(page)=>{
  const windowHandle = await getPageWindowHandle(page);
  return  !windowHandle.React || !windowHandle.ReactDOM;
}

export const cleanPageBodyForReact = async (page, bodyContent) => {
  const isReactDetected = await isReactPage(page)
  if (isReactDetected) {
    bodyContent = bodyContent.replace(/<noscript\b[^>]*>.*?<\/noscript>/gi, "");
    bodyContent = bodyContent.replace(
      /(<div class="App" style=".*?visibility:\s*)hidden(.*?">)/gi,
      "$1visible$2"
    );
  }
  return bodyContent;
};

export async function getXPath(page, element) {
  const xpath = await page.evaluate((el) => {
    // const nodes = [];
    // while (el && el.nodeType === 1) {
    //   let sibling = el.previousSibling;
    //   let count = 0;
    //   while (sibling) {
    //     if (sibling.nodeType === 1 && sibling.nodeName === el.nodeName) {
    //       ++count;
    //     }
    //     sibling = sibling.previousSibling;
    //   }
    //   const nodeName = el.nodeName.toLowerCase();
    //   const index = count > 0 ? `[${count}]` : "";
    //   nodes.unshift(`${nodeName}${index}`);
    //   el = el.parentNode;
    // }
    // return nodes.length ? `/${nodes.join("/")}` : null;
    const getNodeXPath = (node) => {
      const { parentNode } = node;

      if (!parentNode) {
        return '';
      }

      const siblings = Array.from(parentNode.children);

      let xpath = getNodeXPath(parentNode) + '/' + node.tagName.toLowerCase();
      let position = siblings.filter((sibling) => sibling.tagName.toLowerCase() === node.tagName.toLowerCase()).indexOf(node) + 1;

      if (siblings.filter((sibling) => sibling.tagName.toLowerCase() === node.tagName.toLowerCase()).length > 1) {
        xpath += '[' + position + ']';
      }

      return xpath;
    }

    return getNodeXPath(el);
  }, element);

  return xpath;
}

export const getTagNameForCheerioNode = (node) => {
  // console.log(typeof(node));
  const tn = node && node[0] && node[0].name.toLowerCase();
  // console.log("tn", tn, node[0]);
  return tn;
};

export function getXPathFromCheerioNode(node) {
  const getNodeXPath = (node) => {
    
    if (!node || node.length === 0) {
      return '';
    }

    const parentNode = node.parent();

    const siblings = Array.from(parentNode.children());

    const tagName = getTagNameForCheerioNode(node);

    let xpath = getNodeXPath(parentNode) + '/' + tagName;
    const siblingSearch = siblings.filter((sibling) => getTagNameForCheerioNode([sibling]) === tagName);
    let position = siblingSearch.indexOf(node[0]) + 1;

    if (siblingSearch.length > 1) xpath += '[' + position + ']';

    return xpath;
  }

  const xpath = getNodeXPath(node);

  console.log("xpath from cheerio:", xpath);

  return xpath;
}

export function updateIdAutomatically(htmlInput) {
  
  const $ = cheerio.load("", { decodeEntities: false });
  const parsedHtml = $.parseHTML(htmlInput);

  
  $(parsedHtml)
    .find("*:not([id])")
    .each((index, element) => {
      $(element).attr("id", element.name + "-" + generateUniqueId());
    });

  
  const updatedHtml = $.html(parsedHtml);

  return updatedHtml;
}

export function generateUniqueId() {
  return uuidv4();
}

export function extractParentPageUrl(url) {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  const segments = pathname.split("/");
  if (segments.length >= 3) {
    return segments[segments.length - 2];
  }

  return "";
}

export async function prepareMetaDataNode(
  page,
  node,
  nodeText,
  nodeTagName,
  parentXpath,
  nodeXpath
) {
  if (nodeTagName === "IMG") {
      const assetValue = await extractNodeAttribute(page, "src", node);
      return {
        type: "Image",
        assetValue,
        name: getFileNameByUrl(assetValue),
        xpath: nodeXpath,
        parentXpath
      };
  } else if (nodeTagName === "VIDEO") {
    const assetValue = await extractNodeAttribute(page, "src", node);
    return {
      type: "Video",
      name: getFileNameByUrl(assetValue),
      assetValue,
      xpath: nodeXpath,
      parentXpath,
    };
  } else if (nodeTagName === "OBJECT") {
    const assetValue = await extractNodeAttribute(page, "src", node);
    return {
      type: "Object",
      assetValue,
      name: getFileNameByUrl(assetValue),
      xpath: nodeXpath,
      parentXpath,
    };
  } else if (nodeTagName === "AUDIO") {
    const assetValue = await extractNodeAttribute(page, "src", node);
    return {
      type: "Audio",
      assetValue,
      name: getFileNameByUrl(assetValue),
      xpath: nodeXpath,
    };
  } else if (nodeTagName === "IFRAME") {
    const assetValue = await extractNodeAttribute(page, "src", node);
    return {
      type: "Iframe",
      assetValue,
      name: getFileNameByUrl(assetValue),
      xpath: nodeXpath,
    };
  } else if (nodeTagName === "A") {
    const assetValue = await extractNodeAttribute(page, "href", node);
    if(!assetValue) {
      console.log("href for a in null", node);
    }
    return {
      type: "Link",
      assetValue,
      name: getFileNameByUrl(assetValue),
      xpath: nodeXpath,
      parentXpath,
    };
  } else {
    const {
      fontSize,
      fontFamily,
      color,
      lineHeight,
      fontStyle,
      fontWeight,
      fontTilt,
    } = await extractTextNodeMetaData(page, node);
    return {
      type: "Text",
      xpath: nodeXpath,
      parentXpath,
      fontFamily,
      fontSize,
      fontTilt,
      fontStyle,
      color,
      lineHeight,
      fontWeight,
      assetValue: nodeText,
      name: nodeText,
    };
  }
}


export async function downloadImage(imageSrc, url) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const imageUrl = new URL(imageSrc, url).href;
  const imageFileName = path.basename(imageUrl);
  const imagePath = path.join(__dirname, imageFileName);
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

  fs.writeFileSync(imagePath, response.data);
  return imagePath;
}

export async function getDomainName(url) {
  return new URL(url).hostname;
}

export const resolveToUrl = (url, relPath) => Url.resolve(url, relPath); 

export const getFavIcon= async(page)=>{

  const href= await page.evaluate(() => {
    const faviconElement = document.querySelector('link[rel="icon"]');
    if (faviconElement) {
      return faviconElement.href;
    }
    return null;
  });

  if(href){
    return await uploadFile(href)
  }else{
    return null;
  }

}

export const getFileNameByUrl = (url) =>{ 
  try {
    path.basename(url, path.extname(url))
  } catch (error) {
    console.log('Error in fetching getting File name', error)
  }
};

export const getReactEvents= async (el)=>{

  const props =await el.getProperties() 
  // console.log('props', props);
  const reactPropsKey = R.find(p => R.startsWith('__reactProps', p),R.keys(Object.fromEntries(props)));
  if(reactPropsKey){
      const reactPropsValue = await props.get(reactPropsKey).getProperties();
      const events = R.filter(p => R.startsWith('on', p), R.keys(Object.fromEntries(reactPropsValue)));
      return events.map(e => e.substring(2).toLowerCase());
  }
  return [];
}

export async function getDOMEvents(js_obj) {
  let events=[]
  let object_id = js_obj.remoteObject().objectId
  let resp = await js_obj.client.send('DOMDebugger.getEventListeners', {objectId: object_id})
  for(let event of resp.listeners){
      events.push(event.type)
  }
  return events;
}

export const getEventFunction= async(node, events)=>{
  for(let eventType of events){
      switch(eventType){
          case 'onClick':
              return  (()=> node.evaluate(n=> n.click()))
          case 'onclick':
              return  (()=> node.evaluate(n=> n.click()))
          case 'click':
              return  (()=> node.evaluate(n=> n.click()))    
          case 'onMouseEnter'||'mouseover' || 'onHover' || 'onmouseover':
              return  (()=>node.evaluate(n=> n.hover()))
          case 'onLoad'||'onload'||'load':
              return (()=> node.evaluate(n=> n.onLoad()))
      }
   }
  }

  export function escapeCSS(str) {
    return str.replace(/[\s~`!@#$%^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g, '\\$&');
  }
