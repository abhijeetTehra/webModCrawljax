// const fs = require("fs");
import express from "express";

// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const file = require ("../CrawlPaths1.cjs");
const { parseHTML, parseCSS } = require("./Grapejs.cjs");
const htmlCompare = require("html-compare");
const website = file
const css2xpath = require("css2xpath");
import AnsiRegex from "ansi-regex"

const axios = require("axios");
const cheerio = require("cheerio");
const {v4} = require("uuid");
const uuidv4 = v4;
const fs = require("fs")
const cssFile = require("../main.e1e2284b.cjs");
const { getNodeFromHtmlString, extractXpath } = require("./extractXPath.cjs");
const jwtToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoiaHR0cDovL2Rldi5hcGktZ2F0ZXdheS5nYWlhbnNvbHV0aW9ucy5jb206ODAvY29udGVudC1zZXJ2aWNlL3YxLzA3MTk3NTZiLWVlM2EtNGMxYS04OGIyLTkzMGRjODAyMTI3OSIsInN1YiI6ImdhaWFuLmNvbSIsInVzZXJfbmFtZSI6IndodXQiLCJpc3MiOiJnYWlhbi5jb20iLCJhcHBDb25zdW1lciI6bnVsbCwidXNlck5hbWUiOiJ3aHV0IiwidXNlcklkIjoiNjQxMmFiZjNhMWUzM2EwMDAxNjBiMDA2IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9PTU5JX0NPTlNVTUVSIiwiUk9MRV9NQVJLRVRQTEFDRV9VU0VSIl0sImNsaWVudF9pZCI6ImdhaWFuIiwic2NvcGUiOlsidHJ1c3QiLCJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjg5OTA0MTkxLCJqdGkiOiJiODcyYjRhOC04ZmIzLTQ5OGMtOWJjNy0zOGJlZTc0OWI2OTAiLCJlbWFpbCI6IndodXRAZ2F0ZXN0YXV0b21hdGlvbi5jb20ifQ.dCs0oHVwfrgxaW77XJP1SWd_6Rf16z4Jq2Wb1s18JpAbMd-WSaFewjMLq-7bbup6NZgjzH1CE0ZUao_KTIjHCwRGw5jYsZeoqisrRz57P7AjCW7w6QnifX1lVRDyww1EMvWghf1rKRzhQhOxJvhE7dL4D2_id1F8p7YrLd6T3ZnD5ynY7tJ2G_JwYEwZ5-bfV_IxshY65-5UxauQQgmFLeDAsl-p1DIR3I2r6adr4sq-0e_NyxJ692geb6udj5IJm9QoDPpyLm-pvmuwsmelH89-F9rwhqURogboujkHBYR8gC1QZUOO76uERf-guNghFgIJTwwwjxBTJoQErexdoQ";
function removeHead(html) {
  const startIndex = html.indexOf("<HEAD>");
  const endIndex = html.indexOf("</HEAD>");
  const html2 = html.substring(0, startIndex) + html.substring(endIndex + 7);
  const startBodyIndex = html2.indexOf("</NOSCRIPT>");
  const html3 = html2.substring(startBodyIndex + 11, html2.length - 14);
  return html3;
}
function updateIdAutomatically(htmlInput) {
  
  const $ = cheerio.load("", { decodeEntities: false });
  const parsedHtml = $.parseHTML(htmlInput);
  console.log("updating id");
  // $(parsedHtml).find("*:is([id])").each((index,element)=>{
  //   console.log(index);
  //   $(element).removeAttr("id").html();
  // })
  // console.log("removed id");
  $(parsedHtml)
    .find("*:not([id])")
    .each((index, element) => {
      // console.log(index);
      $(element).attr("id", element.name + "-" + generateUniqueId());
    });
console.log("updated id")
  
  const updatedHtml = $.html(parsedHtml);

  return updatedHtml;
}
function generateUniqueId() {
  return uuidv4();
}
const xpbFrameworkPayload = {
  baAppName: "Jokes App Crawljax Trial 2",
  id: "64b7f035333a1d00011a019a",
  ownerId: "618b97cef5dacc0001a6b1c1",
  config: {
    assets: [],
    styles: [],
    pages: [
      //xpbFrameworkPayload.config.pages[0].frames[0].component.components
      {
        frames: [
          {
            component: {
              type: "wrapper",
              tagName: "div",
              attributes: {},
              style: {
                width: "900px",
                "margin-left": "auto",
                "margin-right": "auto",
                color: "#039",
              },
              components: [],
            },
          },
        ],
        type: "main",
        id: "eg3GdUtlLtqf0zrk",
      },
    ],
  },
  html: {
    pre: "aidtaascrawljax",
    body: "",
  },
  css: "",
  script: "console.log('Init')",
  wrapper: [],
  types: {},
  metaData: [],
  sources: [],
  deleted: false,
  events: [],
  files: [
    {
      path: `../css/swiper-bundle.min.css`,
      url: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css",
      type: "css",
    },
    {
      path: `../css/aos.css`,
      url: "https://unpkg.com/aos@next/dist/aos.css",
      type: "css",
    },
  ],
  entryPageURL: "Mobius MarketingURL",
  bbandEntryPageUrl: "Mobius Marketing",
  bcastEntryPackageUrl: "Mobius Marketing",
  bcastEntryPageUrl: "Mobius Marketing",
  version: "v_1",
  defaults: {},
  groupIds: [],
  aqIds: [],
};

const getNodeByXPathTimeout = (page, xpath, timeout = 5000) =>
  page.waitForXPath(xpath, { timeout });
const getNodeByXPath = (page, xpath) => page.$("xpath/" + xpath);
async function start() {
  console.log("Started")
  let initialIndexStr = website[0][0].source.dom;
  // console.log("initialIndexStr : ", initialIndexStr);
  let indexStr = removeHead(initialIndexStr);
  // console.log(indexStr);
  let stateStr = removeHead(website[0][0].target.dom);
  let element = website[0][0].identification.value;
  element = element.replace("/HTML[1]/BODY[1]", "");
  element = element.toLowerCase();
  console.log(element)
  // console.log(element);
  // console.log("removed head")
  let index = await updateIdAutomatically(indexStr);
  console.log("done id update")

  // /DIV[1]/DIV[1]/SECTION[1]/HEADER[1]/BUTTON[1]

  const node = await getNodeFromHtmlString(index, element);
  
  console.log("index : ", index);
  console.log("node : ", node[0].attributes[1].nodeValue);
  let elementId = node[0].attributes[1].nodeValue;

  // return;

  let changes = htmlDiff(indexStr,stateStr);
  console.log(changes.length);
  let parsedIndex = await parseHTML(index);
  xpbFrameworkPayload.config.pages[0].frames[0].component.components =
  parsedIndex;
  // console.log(parsedIndex)
  // let state = await updateIdAutomatically(stateStr);
  // console.log(index);
  // console.log(indexStr);
  // let page = website[0][0];
  // let changes = htmlDiff(indexStr, stateStr);
  xpbFrameworkPayload.html.body = index;
  let css = await parseCSS(cssFile);
  xpbFrameworkPayload.config.styles = css;

  

  // console.log(index);
  // // let state = await parseHTML(stateStr);
  // //   console.log(state);
  // // console.log(stateStr)
  // console.log("before diff");
  // // console.log(indexStr)
  // indexStr = JSON.stringify(indexStr);
  // stateStr = JSON.stringify(stateStr);
  // console.log("reached");
  // let css = await parseCSS(cssFile);
  // console.log(changes);
  // xpbFrameworkPayload.config.pages[0].frames[0].component.components =
  // JSON.stringify(index);
  // xpbFrameworkPayload.config.styles = css;
  for (let i = 1; i < changes.length; i++) {
    // console.log(changes[i].type);
    // console.log(changes[i].before);
    // console.log(changes[i].after);
    // console.log(changes[i].message);
    // console.log(changes[i])
    const xpathQuery = css2xpath(changes[i].before.parentPath);
    // console.log(changes[i].message);
    let message = changes[i].message;
    // console.log(message);
    message = await updateIdAutomatically(message);
    message = message.replace(AnsiRegex(), "");
    // message = await parseHTML(message);
    // console.log(message);
    // message = JSON.stringify(message);
    console.log("message");
    // const node = await getNodeFromHtmlString(index, element);
    // console.log(node);
    // console.log(message);
    let strMess = message.substring(message.indexOf("<"),message.length);
    // console.log(strMess);
    // console.log(node);

    // console.log(changes[i].type);
    const event = {
      eventName: "Inplace " + "click" + " Event",
      eventType: "onClick",
      elementID: elementId,
      isPublic: true,
      actions: [
        {
          actionType: "SHOW_HTML",
          actionParams: [
            {
              html: strMess,
              targetSelector: changes[i].before.parentPath,
              action: "Added",
            },
          ],
        },
      ],
    };
    xpbFrameworkPayload.events.push(event);
  }
  await fs.writeFileSync("result.txt", JSON.stringify(xpbFrameworkPayload));
  // const res = await xpbFrameworkAPI(xpbFrameworkPayload);
  console.log("done call");
}
start();

function htmlDiff(indexStr, stateStr) {
  console.log("inside diff")
  let result = htmlCompare.compare(indexStr, stateStr);
  console.log(result.different);
  return result.changes
}

async function xpbFrameworkAPI(pageData) {
  //  eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3LmdvZ29sZS5jb20vbWVyYV9wcm9maWxlX3BpYy5pbWciLCJzdWIiOiJnYWlhbi5jb20iLCJ1c2VyX25hbWUiOiJ0ZXN0LWRsIiwiaXNzIjoiZ2FpYW4uY29tIiwiYXBwQ29uc3VtZXIiOm51bGwsInVzZXJOYW1lIjoidGVzdC1kbCIsInVzZXJJZCI6IjYxMTRhOGM5NTlmOTJjMDAwMWM4ZjdmZCIsImF1dGhvcml0aWVzIjpbIlJPTEVfT01OSV9DT05TVU1FUiIsIlJPTEVfTUFSS0VUUExBQ0VfVVNFUiIsIlJPTEVfT01OSV9VU0VSIl0sImNsaWVudF9pZCI6IjYwZTU4ZDc5OTU5NDY4MDAwMWUxOTc2OCIsInNjb3BlIjpbInRydXN0IiwicmVhZCIsIndyaXRlIl0sImV4cCI6MTY4NTY1MjgyMSwianRpIjoiYjIzMzA3NTItNzE3My00MGIxLWExY2QtZjFkMjdiMWMxYzMxIiwiZW1haWwiOiJ0ZXN0LWRsX3BlcmZAZ2F0ZXN0YXV0b21hdGlvbi5jb20ifQ.HHZZll8-5qLeFpk_L_e1JpCbKwsyD-iIiB63OWp13FaLOXGayU6ZkAAV2UXNWO_GiFWrSO6nmYKLaBHycs-g-Z73_BG8xlvRm4UWu_CEVszCMj8faXZKH5BnTn4tgp2OpHNpHMcPG04veh8ODnSKhnUJr3ykxUDn9YNRFY9r4meTCRHESXCauFcWHgPxSMAAkgIoHXJX_HlXNjJ2QM6BVUW7EQH0JMg8AVy5D5MTZQPxQ7RgEq0vL-iZHyug3w-Wlh8_T0cwaig0Fw78UvY9Qwwo2HiLQJJ4iO6lozX6zQ84Wtmgwjdn9oIQp5FVWc_90Pp4kn8R-BlyoBlp5W5r3w
  let data = JSON.stringify(pageData);
  console.log("entered api function");
  let config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: data
  };
  console.log("calling api");
  const res = await axios.post("https://ingress-gateway.gaiansolutions.com/xpb-framework/v1.0/618b97cef5dacc0001a6b1c1/ba-app",config)
    // .request(config)
    .then((response) => {
        console.log("received response");
        let res = JSON.stringify(response.data);
        console.log(res);
        fs.writeFileSync("results.txt", res);
        return response.data;
    })
    .catch((error) => {
      console.log("error occured during apicall");
      console.log(error);
    });
  console.log(res);
  console.log("done api call");
  return res;
}
