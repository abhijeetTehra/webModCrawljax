import { DOMParser } from "xmldom";
import xpath from "xpath";
import { JSDOM } from "jsdom";
import AnsiRegex from "ansi-regex";

export async function extractXpath(htmlString, filters) {
  // console.log("htmlString: ", htmlString);

  //HTML string can taken ANSI escape code , in case when we are getting Added HTML String
  //Using ANSIRegex() to remove those escape code

  htmlString = htmlString.replace(AnsiRegex(), "");

  // console.log('Ansi Replace', htmlString.replace(AnsiRegex(), ''))

  const dom = new JSDOM(
    `<!DOCTYPE html><html><body><div id="gjs"></div></body></html>`
  );
  global.window = dom.window;
  global.document = dom.window.document;
  global.DOMParser = new JSDOM().window.DOMParser;
  global.Node = dom.window.Node;

  try {
    // console.log(htmlString)
    const dom = new DOMParser().parseFromString(htmlString);
    const Nodes = xpath.select(filters, dom);
    // console.log(Nodes)

    // console.log(textNodes, textNodes.map((node: any) => node.nodeValue.trim()).filter(Boolean));

    const keyValuePairsContent = {};
    const keyValuePairsHref = new Map();

    const diffNodeXpaths = [];

    Nodes.forEach(async (node) => {
    
      const parentElement = node.nodeType === 3 ? node.parentNode : node; // Node.TEXT_NODE = 3
      const contentValue = node.nodeType === 3 ? node.nodeValue.trim() : null;
      // console.log("parentElement extractXpath", parentElement.getAttribute)
      if (parentElement.getAttribute) {
        const idValue = parentElement.getAttribute("id");
        let hrefValue = node.nodeType === 1 ? node.getAttribute("href") : null;

        const xpath = await getXpathFull(parentElement);
        // console.log('extract path xapth and content Value ', xpath, contentValue, idValue)
        diffNodeXpaths.push({ xpath, idValue, contentValue });

        if (xpath && contentValue) {
          keyValuePairsContent[xpath] = contentValue;
        } else if (xpath && hrefValue && idValue) {
          keyValuePairsHref[xpath] = { hrefValue, idValue };
        }
      }
    });

    return { keyValuePairsContent, keyValuePairsHref, diffNodeXpaths };
  } catch (error) {
    console.log("testXpath", error);
  }
}

// Function to

export async function getXpathFull(element) {
  const paths = [];
  // Use nodeName (instead of localName)
  // so namespace prefix is included (if any).
  for (
    ;
    element && element.nodeType == Node.ELEMENT_NODE;
    element = element.parentNode
  ) {
    let index = 0;
    let hasFollowingSiblings = false;
    for (
      var sibling = element.previousSibling;
      sibling;
      sibling = sibling.previousSibling
    ) {
      // Ignore document type declaration.
      if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE) continue;

      if (sibling.nodeName == element.nodeName) ++index;
    }

    for (
      var sibling = element.nextSibling;
      sibling && !hasFollowingSiblings;
      sibling = sibling.nextSibling
    ) {
      if (sibling.nodeName == element.nodeName) hasFollowingSiblings = true;
    }

    const tagName =
      (element.prefix ? element.prefix + ":" : "") + element.localName;
    const pathIndex =
      index || hasFollowingSiblings ? "[" + (index + 1) + "]" : "";
    paths.splice(0, 0, tagName + pathIndex);
  }

  return paths.length ? "/" + paths.join("/") : null;
}



export const getNodeFromHtmlString= async(htmlString)=>{
  htmlString = htmlString.replace(AnsiRegex(), "");
  global.DOMParser = new JSDOM().window.DOMParser;
  const dom = new DOMParser().parseFromString(htmlString);
  return xpath.select("*", dom);
}
