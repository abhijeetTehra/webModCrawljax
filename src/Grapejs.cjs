// const grapesjs =require('grapesjs')



// var editor = grapejs.init({
//     container:'#gjs',

// });

// function htmlEditorOnChange(string){
//     try {
//       var editor = grapejs.init({
//       container : '#gjs',
//       components: string,
//       style: '.txt-red{color: red}, .txt-green{color:green}',
//   });

//         const config =editor.getConfig();
//         console.log(config)
//     } catch (error) {
//        console.log("error", error)   
//     }
// }

// document.addEventListener('DOMContentLoaded',htmlEditorOnChange('<div class="txt-red"><div>Hello world</div><div class="txt-green">You are in the world</div></div>'))



// document.addEventListener('DOMContentLoaded', function () {
//     // Initialize GrapesJS editor
//     const editor = grapesjs.init({
//         container: '#gjs',
//     });

//     const { Parser } = editor

//     // HTML PART
//     const htmlString = '<div class="txt-red"><div>Hello world</div><div class="txt-green">You are in the world</div></div>';

//     const resHtml = Parser.parseHtml(htmlString, {
//         htmlType: 'text/html',
//         allowUnsafeAttr: true
//     })

//     console.log(resHtml.html);
// });


const {grapesjs} = require('grapesjs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

console.log('Hello World!')
parseHTML()

async function parseHTML(nwHtml) {
    
    // console.log('Parse HTML')

    const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="editor"></div></body></html>`);
    global.window = dom.window;
    global.document = dom.window.document;
    global.DOMParser = new JSDOM().window.DOMParser

   
    const editor = grapesjs.init({
        container: '#editor', 
    });

    const { Parser } = editor;

    try {
        const resHtml = Parser.parseHtml(nwHtml, {
            htmlType: 'text/html'
        })
        return resHtml
    } catch (error) {
        console.log('parse error', error)
    }

  }

  async function parseCSS(string){
    console.log("Parse CSS")
    const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="gjs"></div></body></html>`);
    global.window = dom.window;
    global.document = dom.window.document;
    global.DOMParser = new JSDOM().window.DOMParser;
  
  
    // const postcssParser = parserPostCSS.default;
      const editor = grapesjs.init({
      container: "#gjs",
      // plugins: [postcssParser]
  });
  // console.log("in between")
  try {
      const { Parser } = editor;
      const parsedCssData=  Parser.parseCss(string)
      // console.log(parsedCssData);
       return parsedCssData
  } catch (error) {
    console.log('error', error)
  }
}


module.exports = { parseHTML, parseCSS }







