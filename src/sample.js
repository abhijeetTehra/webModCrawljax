const axios = require("axios");
// const AnsiRegex = require("ansi-regex");
const cheerio = require("cheerio");
const {v4} = require("uuid");
const uuidv4 = v4;
const {fileURLToPath} = require("url")
const fs = require("fs")
const css2xpath = require("css2xpath")
const URL = require("url");
const { parseHTML, parseCSS } = require("./Parser")
const loadAndCrawlPage = async (page) => {

  // console.log("page title: ", pageTitle);

  const pageBody = await cleanAndGetPageBody(page);

  // console.log("Static HTML Body is parsed");

  const pageCSS = await getCleanedCSS(page);

  // console.log("CSS is parsed");

  return {
    pageBody,
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
}
const cleanAndGetPageBody = async (page) => {
  const bodyContent = await cleanupHTMLContent(page);

  // console.log("HTML Cleanup is done");

  const { parsedHtmlData } = await parseHTML(bodyContent);

  return {
    parsedHtmlConfig: parsedHtmlData,
    htmlContent: bodyContent,
    originalContent,
  };
};
const call = (url, method = "get", body, headers) => {
  const config = {
    method,
    maxBodyLength: Infinity,
    url,
    headers,
  };

  config.data = body;

  return axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};
const cleanupHTMLContent = async (content) => {
  // content = content.replace(AnsiRegex(), "");
  // content = await updateImageUrls(content, url);
  content = updateIdAutomatically(content);
  content = await cleanPageBodyForReact(content);
  return content;
};
const cleanPageBodyForReact = async (bodyContent) => {

    bodyContent = bodyContent.replace(/<noscript\b[^>]*>.*?<\/noscript>/gi, "");
    bodyContent = bodyContent.replace(
      /(<div class="App" style=".*?visibility:\s*)hidden(.*?">)/gi,
      "$1visible$2"
    );
  return bodyContent;
};

function updateIdAutomatically(htmlInput) {
  
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

function generateUniqueId() {
  return uuidv4();
}

module.exports = {generateUniqueId,loadAndCrawlPage,cleanPageBodyForReact,updateIdAutomatically,cleanupHTMLContent}
