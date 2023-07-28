// const fs = require("fs");
import express from "express";

// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {JSDOM} from 'jsdom'
const {grapesjs} = require('grapesjs');
import parserPostCSS from 'grapesjs-parser-postcss';
import cheerio from "cheerio";
import DomParser from "dom-parser";
import { parse } from "parse5";
import { call } from "./http.js";
import axios from "axios";

export async function parseCSS(string){

  const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="gjs"></div></body></html>`);
  global.window = dom.window;
  global.document = dom.window.document;
  global.DOMParser = new JSDOM().window.DOMParser;


  const postcssParser = parserPostCSS.default;
    const editor = grapesjs.init({
    container: "#gjs",
    plugins: [postcssParser]
});
try {
    const { Parser } = editor;
    const parsedCssData=  Parser.parseCss(string)
    const getCSSTEXT= editor.getCss()
    // console.log('Parser get text', getCSSTEXT)
    //  global.window.close() 
     return {parsedCssData,getCSSTEXT}
} catch (error) {

  console.log('error', error)
}


//   editor.onReady(async function() {
//       console.log("Akash")
//   })
//   try {
//     console.log('Akash')
//     const { Parser } = editor;
//   //   // console.log(Parser)
//     const rules=  Parser.parseCss(string)
//     console.log(rules)
//   // console.log(parserPostCSS) // await window.close() 
//   } catch (error) {
//     console.log('error', error)
//   }
  
    
}

export async function parseAllCss(url,htmlInput){
  console.log("html")
  // const dom = new JSDOM(htmlInput);
  // // global.window = dom.window;
  // // global.document = dom.window.document;
  // // global.DOMParser = new JSDOM().window.DOMParser;
  let cssContent = "";
  let cssUrls = [];
  // console.log(doc);
  const dom = new JSDOM(`${htmlInput}`);
  dom.window.document.querySelectorAll("[rel=stylesheet]").forEach(link=> {
    console.log(link.getAttribute("href"));
    let li = link.getAttribute("href")
    li = li.substring(1,li.length);
    cssUrls.push(li);
  } );
  dom.window.document.querySelectorAll("style").forEach(style=> {
    console.log(style.textContent);
    let li = style.textContent;
    cssContent += li;
  } );
  await axios.get(`${url}${cssUrls[0]}`).then(res=>{
    cssContent += res.data;
  })
  const { parsedCssData } = await parseCSS(cssContent);
  return [ parsedCssData, cssContent ];
}

export  async function parseHTML(string) {
    
    const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="editor"></div></body></html>`);
    global.window = dom.window;
    global.document = dom.window.document;
    global.DOMParser = new JSDOM().window.DOMParser;
    const editor = grapesjs.init({
      container: '#editor',
    });
    const { Parser } = editor;
    try {
      const resConfig = await Parser.parseHtml(string, {
        htmlType: 'text/html'
      });
      const parsedHtmlData=resConfig.html
      // const getHTMLText= await editor.getHtml()
      // console.log('Parser GET HTML ', getHTMLText)
      // global.window.close();
      return parsedHtmlData;
    } catch (error) {
      console.log('parse error', error);
    }
   
  }



