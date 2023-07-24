import {JSDOM} from 'jsdom'
import grapesjs from 'grapesjs';
import parserPostCSS from 'grapesjs-parser-postcss';


// export async function parseCSS(string){

//   const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="gjs"></div></body></html>`);
//   global.window = dom.window;
//   global.document = dom.window.document;
//   global.DOMParser = new JSDOM().window.DOMParser;


//   const postcssParser = parserPostCSS.default;
//     const editor = grapesjs.init({
//     container: "#gjs",
//     plugins: [postcssParser]
// });
// try {
//     const { Parser } = editor;
//     const parsedCssData=  Parser.parseCss(string)
//     const getCSSTEXT= editor.getCss()
//     // console.log('Parser get text', getCSSTEXT)
//      window.close() 
//      return {parsedCssData,getCSSTEXT}
// } catch (error) {

//   console.log('error', error)
// }


// //   editor.onReady(async function() {
// //       console.log("Akash")
// //   })
// //   try {
// //     console.log('Akash')
// //     const { Parser } = editor;
// //   //   // console.log(Parser)
// //     const rules=  Parser.parseCss(string)
// //     console.log(rules)
// //   // console.log(parserPostCSS) // await window.close() 
// //   } catch (error) {
// //     console.log('error', error)
// //   }
  
    
// }


// export  async function parseHTML(string) {
    
//     const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="editor"></div></body></html>`);
//     global.window = dom.window;
//     global.document = dom.window.document;
//     global.DOMParser = new JSDOM().window.DOMParser;
//     const editor = grapesjs.init({
//       container: '#editor',
//     });
//     const { Parser } = editor;
//     try {
//       const resConfig = await Parser.parseHtml(string, {
//         htmlType: 'text/html'
//       });
//       const parsedHtmlData=resConfig.html
//       const getHTMLText= await editor.getHtml()
//       // console.log('Parser GET HTML ', getHTMLText)
//       global.window.close();
//       return{parsedHtmlData,getHTMLText}
//     } catch (error) {
//       console.log('parse error', error);
//     }
   
//   }


async function parseGrapeToHTML(){

    const configObject={
        "tagName": "div",
        "type": "wrapper",
        "attributes": {
          "id": "root"
        },
        "components": [
          {
            "classes": [
              "App"
            ],
            "attributes": {
              "id": "i9i5"
            },
            "components": [
              {
                "classes": [
                  "header_header__lOwdN"
                ],
                "components": [
                  {
                    "classes": [
                      "header_navbar1__zP7Kr"
                    ],
                    "components": [
                      {
                        "attributes": {
                          "id": "header_contents__BPVm0"
                        },
                        "components": [
                          {
                            "classes": [
                              "header_logo__dpz63"
                            ],
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABFCAYAAACrMNMOAAAABmJLR0QA/wD/AP+gvaeTAAAKpElEQVR42u2cCXRU5RXHv7AGpIIsAmI1LAKyiAWkiiyRRQJGAhFRURBExCqEIOtMWKZVBElMAk0MIcm8TJJJZiaZLCSEzSzEQvbMDHU51VLb2tralsKpLQhCbu+bZJI3b942C8NM8u45/zPnzLzvve/d3/u+e7/73jxCZHPOYs/3IgdNShJt+hY/wapoDsWw9CFDsVZ9Q2Ibl8oOvU1WRHLuM5KMEhQwpRqVfz3goOmWCBxUE5A4luIZOmSTKUz2tpuWRzQb8klmMxsWn4K2VN+SDqhVh1n6tU2mrTIBJ8xIMvdKBcWn7jGNwnDsALUqgaFEhuJM/WQqvLA0L7gLi611M0ukw6H1EUNJje06Qn827JcptZqBxPbKJxlfexoYU+l3aZ0DxFYyQ0ebajv56MpYeTthsaXrnikMxwEQSyl2KuuEiUZGnhRHY0KSjgnJJOkjN7EPbr8VY+MVvn0mDdBJh5PKUhpLqQ3Pd3hYQCAAHfdHIVA4XdZmk+SBnpuCDb0wZv6efZzpb1RIB6RmiGpwVMeNX4Ye6Kzv+YFpfjAS7QgvTMtfMI/LC4cPUDpDGjv9syMCuyYwwmq8H1O1I2zHXzu3xBk4QDIYymSp40yJmv/wA8s8e2f7p+rSNuqcBZTFkLZdGyaVnPb3pOMrgRH2d9+ZDaghVnBccAQAkWwO5dTDpgnF/jnq0AkZQklHAaH6+WCfvxkcWy0ZTpt09uqTUgMbJ5aAv42wBcLpfMZOX+17BaECx+2ukgyI6BkytGv95OPw9iQEp7RM8HlgqpY4cUsA2lV/uPB+gqNFCpw25TKUVw/9k6rhDQS39KkzQBTmd3z6ZHGtlSW8cNYs85spQy8Ox05Ge732WCmsm1JKjzZa8T55jsUkubdIpeMq8SdTqbpIBUTyWSqog1U/PwFrpp2AAIWlBVyUJdr1zmzGO8FRlgiivFDXehVIl8J8Ez+ridJ8gCh/O5+oKroxKvYpwhUPzWv+l1E1/FsMjp0K27Vi+klY+fhJ6KIwM334uvSDK2sGY4NypyG5oK47zTAzrBL2DC9g1hJv+WUanNsYygmokKUiho7Vwf0x52D5rNNWOfhoW90QkSGOI0Fh+dQbsCTqOiqJ7DaP9wtohQ0TxQDZqbgOuuXXQtjcj61JyLD1tdx+4LVIvPuqvHDLh4CJyHwOtdynoBXUvcsHx04lLeqTUQMhC8rgmfllMPrVauHz5Z4SLX8WakQHyIdXnocZSyrTlgQXiC92N5b2JFHmN7HtH7wM9Io1hkY1PehVYEUYUgQAtel4HXQ31sLktVUwJ7QCZi+uhF5bTVIuUr3jtMix4dhV561lll0jC2DH6CLYPL640vUKQuZkOl69+4AR+kc03KkR+idMiN7z+CK2uO59LjhMBepqYbjyHExbVgVPhFfBqDXV1njuVP9Z5dAA5o+LcY6NHpIL+4cZ4VcP5sPuEQWw86FC2PLwMUgmyd1dKPlE8mWJ2u5ZMAYvDh+ZdptRFpQGQ8UOsr/pJbyHNoeUNE4hxfXTcOoLQUDrUAkI5jMmoAA6PunroHdKHdwTXQvDttfA6NXVMBLh0LGq36ZG6OIsJEf9wJ4erT/s+6kRDg3UQ8zgXDhwX551ZNCZnWJUIWwbWwSR44thb1ABfRNS9GotJFkTMbW/JPVWfwWhE6GmQdiPv/hPbPWyVJ/1aPdwlHnY4LfqIamvDg4P0MOH9+bCBwjtPYSoCsqHqJGFsH0MTpHjjlkLnG/+7DhoArU2h/8Dp79E/NyOt/EP4me9s89mYLsDnOQVlmUyLDtZ2KMt/sjdOkjor4e4QQY4ODQP9t1vhF8iNFtcewenyAiMc794tARex7LLq7iSp6dSdx6mwaJwoeS5VmGu6PTgHGzXhTWJ9+ghHqHRMN7niGt0cvIWVqXXYZGTLr288sRJeGHmKQgPPgPxAw1OAtO4Xq5RWBZ3SmhbLXdx+uMQOl8orr39SIm1Mk0XOunyy4szTsFzCI1OYhY9XQbzF5VD8LOVsGz2aesIpWFSvbNB2yMLMntq4Uhf3U1nnqAStecNXfGEPu8U0BSWmfwFktHFA/ni2gaMa+sxrq2dWgqrENpLT56yAloy54x1sfj0wnJ4CtchM8LOwuPPVcGU5Z/AIyt+Y13rPbS6ZvdtXzcpLZs6LjiJRYW9QfkXowTi2stY8KRrZ3Q5JnTex7AgpBzmPFMBs3DxSK9Lpi7/5AZCW3tHKhU7Gvriyf6rw0CLMk132geRE0rCN04s/s4a16Y4xrVncYpciOWZuYsqmmaFnV3lczVCpXm3f6f9XweSTm2qht64kP7Kj6bGL4lsDtnzPHTOTd+F1jBUhiQ6lZpW40hs9glguywhMhDXIM5HB172LrAL1zCZekB2vqcMsNiuuLDnNk2pP6JelJ3stdhoGYNJQww6/a9OgrpIFKZIooIushNlk0022WSTTTbZZJNNNtlkk60jWC5JP814mOcq/adCqW215OijzGdL9ES9XVq71Gl43AR8FqWYqVyiMepJ+hax5zj1hNrBbiskPFaujlDh7P1QJHEIe1vbb3zfCxn6YAuzDf4XfBt7mxySNhW/T3Wm/8jlGPtAnA/30G82EOukjqQt5Gn/Pf9Fomly5iEjPUmdxeMgl580yyFUsG0/avLRCPbvfMeQCM7uT5kISNd+kcT1c6PfzUwnnhN47rFZQicFnJM21VPOziPpVZ4E1+JQVQ9vg3Ozz82ST15N1IP4Rw6VJtQWp6YGTzoa9xfryf3hxXDJm+DQX0avgUP96Mpoa3X0f23bGkh6Afc2mkI8ocgcoo6wCbfdg4+wX+baXuj4+FUAn/ANRF0xRlzn2p+3wHGPemob89yFlRIhdPIO33ElKpiARIi1ZYLjACb6bqpEfEsdx8VwwlWnGoh6nC+Bo33ocjbJ1TF6imM9gfytWDtMIJ7kA8cFQGr/dES9XqpTcVQN4hNFkoLY71o2EM1J706V6fmOFyIVjv9tD+USXtyhWuybZHBiHc4m6tlS2tnA6UnactZou+buxeWJGHcnskrXEynKIMkpGLgvsiBU8I82aokQODzoCtb3lzoruCxy+G7XkzOqkEjpGNdvmSR5qNQ2NnDJIm2Ep8qjj0kHl7WUT7huW8nxJ5TvvA3OZpkkcRT654PW95NxCn//G+/xhTpGJxAs4kfpV1fYj7a0dWLguJOT9FOujDbMOD931al0JcYbyQn6zSAGztXZJpukhoh2TMV456LYdCMGDqfeL7nWJZhZvUKXnJJI9L02USR5LCYOnG/Kwz51c9Wp2AfKXXB0mUroGBRRBXJMcUdcgZZOkkc6vKibpL0s6eRxhP1PYJ2mkArOMwtmTb0n9+cKOFeEF+e81gw5zN19tZUhxcCVksM9pY42MXDuBGZcPF/xdMkLHbpZDByeg9pTSZC74PDCvU6cmW7o6glHJhnnLLj2USz4DmUOB1P7PF1kRif8TkpW2XIc+kXcrh1HyyiQuwuOffI3mOKPD5obDCAmgWDati9sc1nktsze3JZlh10fMLhfRZVhiSdYuBJCVbLbCok+B4xz5RqSMIC5nwySMlzMD9kkZTB9Wwh1RcIxvsC4tpHjVs5iZ/rbur9P0Q8z5RuPsskmm2yyySabz9r/AeXgSPS1y7BuAAAAAElFTkSuQmCC",
                                  "alt": "mobiuslogo"
                                }
                              }
                            ]
                          },
                          {
                            "components": [
                              {
                                "type": "text",
                                "attributes": {
                                  "id": "iizz"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Lösungen"
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "header_bottombar__cthYh"
                                ]
                              }
                            ]
                          },
                          {
                            "components": [
                              {
                                "type": "text",
                                "attributes": {
                                  "id": "ip3xf"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Produkte"
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "header_bottombar__cthYh"
                                ]
                              }
                            ]
                          },
                          {
                            "components": [
                              {
                                "type": "text",
                                "attributes": {
                                  "id": "ikd8g"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Bahnsteig"
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "header_bottombar__cthYh"
                                ]
                              }
                            ]
                          },
                          {
                            "components": [
                              {
                                "type": "text",
                                "attributes": {
                                  "id": "iiq1s"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Firma"
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "header_bottombar__cthYh"
                                ]
                              }
                            ]
                          },
                          {
                            "components": [
                              {
                                "type": "text",
                                "attributes": {
                                  "id": "ijbyt"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Kontakt"
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "header_bottombar__cthYh"
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "attributes": {
                          "id": "header_btns__Z3D0E"
                        },
                        "components": [
                          {
                            "components": [
                              {
                                "tagName": "button",
                                "type": "text",
                                "attributes": {
                                  "id": "header_book__RlKGW"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Buchen Sie eine Demo"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "attributes": {
                              "id": "header_login__RBap2"
                            },
                            "components": [
                              {
                                "tagName": "span",
                                "type": "text",
                                "attributes": {
                                  "id": "ia2mu"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Login"
                                  }
                                ]
                              },
                              {
                                "tagName": "span",
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgBhY7BCQIxEEV/IogXwRIswRJMCXv0Ziob2IsXxRIWO0kJC96EbJxPyGU2sC+HDOG/nwGUB+QskBM2YI6347CHnwowf7GEiDj3hBdGAcr1pxl/oFnP5ahya2twgyfGScc7UzWvvDVYsONvKpTEthtiosAiFmowOeQw6LtrjVbMWAYPL1ZA+6kvVqywkqzYE4i3Ut05Bx0/PYH8AQQiSyIV/t1NAAAAAElFTkSuQmCC",
                                      "alt": "vector"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "classes": [
                      "header_menu1__84-hi"
                    ]
                  }
                ]
              },
              {
                "classes": [
                  "land_main"
                ],
                "components": [
                  {
                    "classes": [
                      "Top_section_bgmain1__fnKsC"
                    ],
                    "components": [
                      {
                        "components": [
                          {
                            "tagName": "h1",
                            "type": "text",
                            "attributes": {
                              "id": "Top_section_mainheading__ViUsc"
                            },
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Tomorrow, "
                              },
                              {
                                "tagName": "span",
                                "type": "text",
                                "attributes": {
                                  "id": "Top_section_mainheading21__gX5NR"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Delivered"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tagName": "h6",
                            "type": "text",
                            "classes": [
                              "Top_section_mainheading31__m36Ez"
                            ],
                            "attributes": {
                              "id": "i3snd"
                            },
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Composable Business Re-Engineering thorugh low-code AI"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "components": [
                          {
                            "type": "image",
                            "classes": [
                              "Top_section_bgimg2__2Selb"
                            ],
                            "attributes": {
                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/newbg/2.png"
                            }
                          }
                        ]
                      },
                      {
                        "attributes": {
                          "id": "Top_section_Buttons__whOte"
                        },
                        "components": [
                          {
                            "type": "link",
                            "classes": [
                              "buttons_btn__w-Xuo",
                              "buttons_btn_filled__JunTx",
                              "btn-sign"
                            ],
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Sign Up for a free trail"
                              }
                            ]
                          },
                          {
                            "type": "link",
                            "classes": [
                              "buttons_btn__w-Xuo"
                            ],
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Book a Demo"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "classes": [
                      "Second_section_sectionmain__YXn3r",
                      "pb-12"
                    ],
                    "attributes": {
                      "id": "io6yg"
                    },
                    "components": [
                      {
                        "classes": [
                          "Second_section_box1__cziDk"
                        ],
                        "components": [
                          {
                            "classes": [
                              "Second_section_mainBox__zBoSV"
                            ],
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "id": "Second_section_bgImg3__EmGMH",
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/newbg/mobius_dtass/0.png"
                                }
                              },
                              {
                                "tagName": "h1",
                                "type": "text",
                                "classes": [
                                  "Second_section_heading__Nx-dt"
                                ],
                                "attributes": {
                                  "id": "i9gsj"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Mobius DTaaS"
                                  }
                                ]
                              },
                              {
                                "components": [
                                  {
                                    "tagName": "h3",
                                    "type": "text",
                                    "classes": [
                                      "Second_section_heading2__EwXWu"
                                    ],
                                    "attributes": {
                                      "id": "ilmsj"
                                    },
                                    "components": [
                                      {
                                        "type": "textnode",
                                        "content": "The Platform of Platforms"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "classes": [
                              "Second_section_panel__RFMQr"
                            ],
                            "components": [
                              {
                                "classes": [
                                  "container",
                                  "contmain"
                                ],
                                "components": [
                                  {
                                    "attributes": {
                                      "id": "panelmain"
                                    },
                                    "components": [
                                      {
                                        "classes": [
                                          "accordion"
                                        ],
                                        "attributes": {
                                          "id": "i9ria"
                                        },
                                        "components": [
                                          {
                                            "classes": [
                                              "accordion-item"
                                            ],
                                            "components": [
                                              {
                                                "tagName": "h2",
                                                "classes": [
                                                  "accordion-header"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "button",
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-button"
                                                    ],
                                                    "attributes": {
                                                      "type": "button",
                                                      "aria-expanded": "true",
                                                      "id": "ik1k4"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "SaaSifying Digital Transformation"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "classes": [
                                                  "accordion-collapse",
                                                  "collapse",
                                                  "show"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-body"
                                                    ],
                                                    "attributes": {
                                                      "id": "isnyl"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Our advanced SaaS tools enable lightning-speed digital transformation through low-code and XaaS phygital transformation. Streamline operations, enhance customer experiences, and create new value in weeks. Our platform is agile, innovative, cost-effective, and scalable to meet market needs."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "accordion-item"
                                            ],
                                            "components": [
                                              {
                                                "tagName": "h2",
                                                "classes": [
                                                  "accordion-header"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "button",
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-button",
                                                      "collapsed"
                                                    ],
                                                    "attributes": {
                                                      "type": "button",
                                                      "aria-expanded": "false",
                                                      "id": "ioyg1"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Phygital Transformation"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "classes": [
                                                  "accordion-collapse",
                                                  "collapse"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-body"
                                                    ],
                                                    "attributes": {
                                                      "id": "iup8c"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Mobius DTaaS achieves convergence between physical and digital worlds through Phygital Transformation. Its SaaS tools - Pascal Intelligence, BoltzmannBot, Monet, Vinci, and HolaVerse - empower businesses to streamline operations, enhance customer experiences, and drive phygital innovation. By combining human and machine capabilities, Mobius DTaaS transforms operations, creates new revenue streams, and unlocks new possibilities."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "accordion-item"
                                            ],
                                            "components": [
                                              {
                                                "tagName": "h2",
                                                "classes": [
                                                  "accordion-header"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "button",
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-button",
                                                      "collapsed"
                                                    ],
                                                    "attributes": {
                                                      "type": "button",
                                                      "aria-expanded": "false",
                                                      "id": "im9yy"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Accountable Transformation"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "classes": [
                                                  "accordion-collapse",
                                                  "collapse"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-body"
                                                    ],
                                                    "attributes": {
                                                      "id": "iq3y2"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Mobius DTaaS provides businesses with a suite of SaaS tools for accountable, responsible, and monetizable digital transformation. These tools measure effectiveness, enhance digital capabilities, and enable businesses to improve customer experiences and achieve measurable outcomes such as increased revenue and reduced costs."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "accordion-item"
                                            ],
                                            "components": [
                                              {
                                                "tagName": "h2",
                                                "classes": [
                                                  "accordion-header"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "button",
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-button",
                                                      "collapsed"
                                                    ],
                                                    "attributes": {
                                                      "type": "button",
                                                      "aria-expanded": "false",
                                                      "id": "i2hwa"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "SaaS Factory"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "classes": [
                                                  "accordion-collapse",
                                                  "collapse"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-body"
                                                    ],
                                                    "attributes": {
                                                      "id": "i87s5"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Mobius DTaaS is a SaaS factory that enables scalable digital transformation with cutting-edge tools. With constantly improving services, Mobius DTaaS delivers flexible, cost-effective, and reliable solutions compared to traditional software deployment models."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "accordion-item"
                                            ],
                                            "components": [
                                              {
                                                "tagName": "h2",
                                                "classes": [
                                                  "accordion-header"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "button",
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-button",
                                                      "collapsed"
                                                    ],
                                                    "attributes": {
                                                      "type": "button",
                                                      "aria-expanded": "false",
                                                      "id": "i5wtg"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Inter-org Digital Transformation"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "classes": [
                                                  "accordion-collapse",
                                                  "collapse"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "text",
                                                    "classes": [
                                                      "accordion-body"
                                                    ],
                                                    "attributes": {
                                                      "id": "iwtzu"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Mobius DTaaS enables digital transformation between organizations through API integrations, streamlining operations and reducing manual interventions. Its secure platform and API-first approach provide greater agility, scalability, and efficiency, accelerating digital transformation journeys and achieving better business outcomes."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "components": [
                      {
                        "classes": [
                          "container",
                          "contright"
                        ],
                        "components": [
                          {
                            "components": [
                              {
                                "tagName": "h3",
                                "type": "text",
                                "classes": [
                                  "T1"
                                ],
                                "attributes": {
                                  "id": "iu3ffk"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Faster Time to Value"
                                  }
                                ]
                              },
                              {
                                "tagName": "p",
                                "type": "text",
                                "classes": [
                                  "T2"
                                ],
                                "attributes": {
                                  "id": "ickr5n"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Save time with a pure low code platform. Integrate, test & deploy applications at lightning speed"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "image",
                            "attributes": {
                              "id": "imagecont",
                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/landing/1.png"
                            }
                          }
                        ]
                      },
                      {
                        "classes": [
                          "container",
                          "contleft"
                        ],
                        "components": [
                          {
                            "type": "image",
                            "attributes": {
                              "id": "imagecont-2",
                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/landing/2.png"
                            }
                          },
                          {
                            "components": [
                              {
                                "tagName": "h3",
                                "type": "text",
                                "classes": [
                                  "T1"
                                ],
                                "attributes": {
                                  "id": "i7f7uh"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Build Businesses of the Future"
                                  }
                                ]
                              },
                              {
                                "tagName": "p",
                                "type": "text",
                                "classes": [
                                  "T2"
                                ],
                                "attributes": {
                                  "id": "i7h2t4"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Save time with a pure low code platform. Integrate, test & deploy applications at lightning speed"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "classes": [
                          "container",
                          "contright"
                        ],
                        "components": [
                          {
                            "components": [
                              {
                                "tagName": "h3",
                                "type": "text",
                                "classes": [
                                  "T1"
                                ],
                                "attributes": {
                                  "id": "i76mgi"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "A Marketplace of Connectors"
                                  }
                                ]
                              },
                              {
                                "tagName": "p",
                                "type": "text",
                                "classes": [
                                  "T2"
                                ],
                                "attributes": {
                                  "id": "i4t93z"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Mobius Suite offers an integrated marketplace to form new alliances & expand to new verticals"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "image",
                            "attributes": {
                              "id": "imagecont-3",
                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/landing/3.png"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "attributes": {
                      "id": "Second_section_digitalinfo__SzODD"
                    },
                    "components": [
                      {
                        "classes": [
                          "digitalPlatformMenu_whole_back__a442O"
                        ],
                        "components": [
                          {
                            "classes": [
                              "container",
                              "mx-auto",
                              "text-center"
                            ],
                            "components": [
                              {
                                "tagName": "h2",
                                "type": "text",
                                "classes": [
                                  "digitalPlatformMenu_Heading__9p0fS"
                                ],
                                "attributes": {
                                  "id": "i5ik3d"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "The Mobius DTasS Platform"
                                  }
                                ]
                              },
                              {
                                "tagName": "h2",
                                "type": "text",
                                "classes": [
                                  "digitalPlatformMenu_secondH__GpmIW"
                                ],
                                "attributes": {
                                  "id": "i2h471"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": " The One Platform for End-to-End Digital Transformation"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "classes": [
                              "digitalPlatformMenu_cont2__pm492"
                            ],
                            "components": [
                              {
                                "components": [
                                  {
                                    "classes": [
                                      "digitalPlatformMenu_Li__byBlb"
                                    ],
                                    "components": [
                                      {
                                        "tagName": "li",
                                        "type": "text",
                                        "classes": [
                                          "digitalPlatformMenu_List__9qlUW"
                                        ],
                                        "attributes": {
                                          "id": "isssnn"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Pascal Intelligence (PI)"
                                          }
                                        ]
                                      },
                                      {
                                        "tagName": "li",
                                        "type": "text",
                                        "classes": [
                                          "digitalPlatformMenu_List__9qlUW"
                                        ],
                                        "attributes": {
                                          "id": "itu0jv"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "BoltzmannBot (BoB)"
                                          }
                                        ]
                                      },
                                      {
                                        "tagName": "li",
                                        "type": "text",
                                        "classes": [
                                          "digitalPlatformMenu_List__9qlUW"
                                        ],
                                        "attributes": {
                                          "id": "i6hlxl"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Monet"
                                          }
                                        ]
                                      },
                                      {
                                        "tagName": "li",
                                        "type": "text",
                                        "classes": [
                                          "digitalPlatformMenu_List__9qlUW"
                                        ],
                                        "attributes": {
                                          "id": "i2n9q6"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Vinci"
                                          }
                                        ]
                                      },
                                      {
                                        "tagName": "li",
                                        "type": "text",
                                        "classes": [
                                          "digitalPlatformMenu_List__9qlUW"
                                        ],
                                        "attributes": {
                                          "id": "i4yxjc"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "HolaCracy"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "components": [
                                  {
                                    "type": "image",
                                    "classes": [
                                      "digitalPlatformMenu_digitalimg__B68MU"
                                    ],
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/newbg/digital/0.png",
                                      "alt": "Image not found "
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "digitalPlatformMenu_digitalcontmain__yupph"
                                ],
                                "components": [
                                  {
                                    "tagName": "h2",
                                    "type": "text",
                                    "classes": [
                                      "digitalPlatformMenu_DigitalHeading__jXy5W"
                                    ],
                                    "attributes": {
                                      "id": "ixizzy"
                                    },
                                    "components": [
                                      {
                                        "type": "textnode",
                                        "content": "AI Powered Predictive Analysis"
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "h2",
                                    "type": "text",
                                    "classes": [
                                      "digitalPlatformMenu_DigitalContent__v9QVk"
                                    ],
                                    "attributes": {
                                      "id": "ivwzs7"
                                    },
                                    "components": [
                                      {
                                        "type": "textnode",
                                        "content": "PI-Pascal Intelligence is a powerful multi-tenant, cloud-native SaaS tool that empowers enterprises to make data-driven decisions and turn data into actionable insights. It provides low-code tools for data visualization, contextualization, and targeting, along with all three layers of big data processing - ingest, process, and serve."
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "classes": [
                      "py-28"
                    ],
                    "attributes": {
                      "id": "iro43t"
                    },
                    "components": [
                      {
                        "classes": [
                          "mainbuiltheader"
                        ],
                        "components": [
                          {
                            "tagName": "header",
                            "components": [
                              {
                                "tagName": "h3",
                                "type": "text",
                                "classes": [
                                  "prebuilt"
                                ],
                                "attributes": {
                                  "id": "iu7hlh"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Prebuilt Integrations with thousands of Apps & Workflows"
                                  }
                                ]
                              },
                              {
                                "tagName": "p",
                                "type": "text",
                                "classes": [
                                  "prebuilt2",
                                  "body-text"
                                ],
                                "attributes": {
                                  "id": "i3pul1"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Mobius Suite integrates with thousands of Apps, APIs, Content, IT & Infrasturcture providers across various domains throughout the globe"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "classes": [
                      "swiper",
                      "swipermenu",
                      "swiper-initialized",
                      "swiper-horizontal"
                    ],
                    "components": [
                      {
                        "classes": [
                          "swiper-wrapper"
                        ],
                        "attributes": {
                          "id": "i9meap"
                        },
                        "components": [
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "irzysk"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/12.png",
                                  "alt": "Image not found ",
                                  "id": "ilyxln"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide",
                              "swiper-slide-prev"
                            ],
                            "attributes": {
                              "id": "iy4yju"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/13.png",
                                  "alt": "Image not found ",
                                  "id": "ijdwqs"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide",
                              "swiper-slide-active"
                            ],
                            "attributes": {
                              "id": "i3n4ha"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/14.png",
                                  "alt": "Image not found ",
                                  "id": "ia9sqn"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide",
                              "swiper-slide-next"
                            ],
                            "attributes": {
                              "id": "iwlxgi"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/appstore.png",
                                  "alt": "Image not found ",
                                  "id": "ir7rcf"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "ix7bt9"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/drive.png",
                                  "alt": "Image not found ",
                                  "id": "i4zzlw"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "ihy65o"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/playstore.png",
                                  "alt": "Image not found ",
                                  "id": "i53d55"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "icw6h5"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/slack.png",
                                  "alt": "Image not found ",
                                  "id": "iu4lly"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "iw5epr"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/Twilio.png",
                                  "alt": "Image not found ",
                                  "id": "i5xtfq"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "i202va"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/zoom.png",
                                  "alt": "Image not found ",
                                  "id": "iueqet"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "i1iz8m"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/12.png",
                                  "alt": "Image not found ",
                                  "id": "i7czae"
                                }
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-slide"
                            ],
                            "attributes": {
                              "id": "ijbndi"
                            },
                            "components": [
                              {
                                "type": "image",
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/13.png",
                                  "alt": "Image not found ",
                                  "id": "ik85hm"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "classes": [
                          "swiper-pagination"
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "classes": [
                      "appswipermain"
                    ],
                    "components": [
                      {
                        "classes": [
                          "container",
                          "mx-auto",
                          "text-center",
                          "mb-12"
                        ],
                        "components": [
                          {
                            "tagName": "h1",
                            "type": "text",
                            "classes": [
                              "AppsPowered"
                            ],
                            "attributes": {
                              "id": "i9jvup"
                            },
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Apps Powered by Mobius "
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "classes": [
                          "swiper",
                          "swiper-coverflow",
                          "swiper-3d",
                          "swiper-initialized",
                          "swiper-horizontal",
                          "swiper-watch-progress",
                          "mySwiper"
                        ],
                        "components": [
                          {
                            "classes": [
                              "swiper-wrapper"
                            ],
                            "attributes": {
                              "id": "iee7zh"
                            },
                            "components": [
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-visible"
                                ],
                                "attributes": {
                                  "id": "izq49g"
                                },
                                "components": [
                                  {
                                    "type": "link",
                                    "editable": false,
                                    "components": [
                                      {
                                        "tagName": "article",
                                        "classes": [
                                          "border",
                                          "border-royal-gray-300",
                                          "rounded-3xl",
                                          "bg-white",
                                          "AppPowered_card__TbJPi"
                                        ],
                                        "attributes": {
                                          "id": "ioe7vq"
                                        },
                                        "components": [
                                          {
                                            "classes": [
                                              "bg-opacity-20",
                                              "h-40",
                                              "rounded-t-3xl"
                                            ],
                                            "components": [
                                              {
                                                "type": "text",
                                                "classes": [
                                                  "AppPowered_Image__TcKNd"
                                                ],
                                                "attributes": {
                                                  "id": "iyds9z"
                                                },
                                                "components": [
                                                  {
                                                    "type": "textnode",
                                                    "content": " "
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "image",
                                                "attributes": {
                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/1.png",
                                                  "alt": "Image not found ",
                                                  "id": "idf6w5"
                                                }
                                              },
                                              {
                                                "tagName": "header",
                                                "components": [
                                                  {
                                                    "tagName": "h5",
                                                    "type": "text",
                                                    "classes": [
                                                      "undefined",
                                                      "text-center"
                                                    ],
                                                    "attributes": {
                                                      "id": "i2ga35"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "bg-white",
                                              "container",
                                              "mt-36"
                                            ],
                                            "components": [
                                              {
                                                "classes": [
                                                  "mt-2"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "p",
                                                    "type": "text",
                                                    "classes": [
                                                      "mt-2",
                                                      "text-royal-gray-500"
                                                    ],
                                                    "attributes": {
                                                      "id": "i1ou2z"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311 citizen engagement app is a mobile application that\n             allows citizens to report non-emergency issues to their\n             local government and receive updates on the status of\n             their requests."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "tagName": "footer",
                                            "classes": [
                                              "border-t",
                                              "border-royal-gray-300",
                                              "rounded-full",
                                              "mt-8"
                                            ],
                                            "components": [
                                              {
                                                "type": "table",
                                                "droppable": [
                                                  "tbody",
                                                  "thead",
                                                  "tfoot"
                                                ],
                                                "classes": [
                                                  "table-auto",
                                                  "border-collapse",
                                                  "w-full",
                                                  "h-14",
                                                  "border-gray-500",
                                                  "mt-0"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "tbody",
                                                    "draggable": [
                                                      "table"
                                                    ],
                                                    "droppable": [
                                                      "tr"
                                                    ],
                                                    "components": [
                                                      {
                                                        "type": "row",
                                                        "draggable": [
                                                          "thead",
                                                          "tbody",
                                                          "tfoot"
                                                        ],
                                                        "droppable": [
                                                          "th",
                                                          "td"
                                                        ],
                                                        "classes": [
                                                          "grid",
                                                          "grid-cols-2",
                                                          "items-center",
                                                          "justify-center"
                                                        ],
                                                        "components": [
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "border-r",
                                                              "px-4",
                                                              "py-4",
                                                              "text-center",
                                                              "flex",
                                                              "items-center",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/preview.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "iwrk0w"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Preview"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "px-4",
                                                              "py-2",
                                                              "text-center",
                                                              "flex",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/External.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "ibh9za"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Details"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-visible",
                                  "swiper-slide-prev"
                                ],
                                "attributes": {
                                  "id": "ibfpe4"
                                },
                                "components": [
                                  {
                                    "type": "link",
                                    "editable": false,
                                    "components": [
                                      {
                                        "tagName": "article",
                                        "classes": [
                                          "border",
                                          "border-royal-gray-300",
                                          "rounded-3xl",
                                          "bg-white",
                                          "AppPowered_card__TbJPi"
                                        ],
                                        "attributes": {
                                          "id": "ibwn84"
                                        },
                                        "components": [
                                          {
                                            "classes": [
                                              "bg-opacity-20",
                                              "h-40",
                                              "rounded-t-3xl"
                                            ],
                                            "components": [
                                              {
                                                "type": "text",
                                                "classes": [
                                                  "AppPowered_Image__TcKNd"
                                                ],
                                                "attributes": {
                                                  "id": "iop7yg"
                                                },
                                                "components": [
                                                  {
                                                    "type": "textnode",
                                                    "content": " "
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "image",
                                                "attributes": {
                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/2.png",
                                                  "alt": "Image not found ",
                                                  "id": "ik05c3"
                                                }
                                              },
                                              {
                                                "tagName": "header",
                                                "components": [
                                                  {
                                                    "tagName": "h5",
                                                    "type": "text",
                                                    "classes": [
                                                      "undefined",
                                                      "text-center"
                                                    ],
                                                    "attributes": {
                                                      "id": "i48e1x"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "Live Maps"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "bg-white",
                                              "container",
                                              "mt-36"
                                            ],
                                            "components": [
                                              {
                                                "classes": [
                                                  "mt-2"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "p",
                                                    "type": "text",
                                                    "classes": [
                                                      "mt-2",
                                                      "text-royal-gray-500"
                                                    ],
                                                    "attributes": {
                                                      "id": "ixsy8l"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311 citizen engagement app is a mobile application that\n             allows citizens to report non-emergency issues to their\n             local government and receive updates on the status of\n             their requests."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "tagName": "footer",
                                            "classes": [
                                              "border-t",
                                              "border-royal-gray-300",
                                              "rounded-full",
                                              "mt-8"
                                            ],
                                            "components": [
                                              {
                                                "type": "table",
                                                "droppable": [
                                                  "tbody",
                                                  "thead",
                                                  "tfoot"
                                                ],
                                                "classes": [
                                                  "table-auto",
                                                  "border-collapse",
                                                  "w-full",
                                                  "h-14",
                                                  "border-gray-500",
                                                  "mt-0"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "tbody",
                                                    "draggable": [
                                                      "table"
                                                    ],
                                                    "droppable": [
                                                      "tr"
                                                    ],
                                                    "components": [
                                                      {
                                                        "type": "row",
                                                        "draggable": [
                                                          "thead",
                                                          "tbody",
                                                          "tfoot"
                                                        ],
                                                        "droppable": [
                                                          "th",
                                                          "td"
                                                        ],
                                                        "classes": [
                                                          "grid",
                                                          "grid-cols-2",
                                                          "items-center",
                                                          "justify-center"
                                                        ],
                                                        "components": [
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "border-r",
                                                              "px-4",
                                                              "py-4",
                                                              "text-center",
                                                              "flex",
                                                              "items-center",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/preview.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "iilxgw"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Preview"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "px-4",
                                                              "py-2",
                                                              "text-center",
                                                              "flex",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/External.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "ijikwf"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Details"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-visible",
                                  "swiper-slide-active"
                                ],
                                "attributes": {
                                  "id": "itaq6g"
                                },
                                "components": [
                                  {
                                    "type": "link",
                                    "editable": false,
                                    "components": [
                                      {
                                        "tagName": "article",
                                        "classes": [
                                          "border",
                                          "border-royal-gray-300",
                                          "rounded-3xl",
                                          "bg-white",
                                          "AppPowered_card__TbJPi"
                                        ],
                                        "attributes": {
                                          "id": "ixx4ms"
                                        },
                                        "components": [
                                          {
                                            "classes": [
                                              "bg-opacity-20",
                                              "h-40",
                                              "rounded-t-3xl"
                                            ],
                                            "components": [
                                              {
                                                "type": "text",
                                                "classes": [
                                                  "AppPowered_Image__TcKNd"
                                                ],
                                                "attributes": {
                                                  "id": "iafze8"
                                                },
                                                "components": [
                                                  {
                                                    "type": "textnode",
                                                    "content": " "
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "image",
                                                "attributes": {
                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/3.png",
                                                  "alt": "Image not found ",
                                                  "id": "i313xg"
                                                }
                                              },
                                              {
                                                "tagName": "header",
                                                "components": [
                                                  {
                                                    "tagName": "h5",
                                                    "type": "text",
                                                    "classes": [
                                                      "undefined",
                                                      "text-center"
                                                    ],
                                                    "attributes": {
                                                      "id": "ih96zg"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "First Responder"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "bg-white",
                                              "container",
                                              "mt-36"
                                            ],
                                            "components": [
                                              {
                                                "classes": [
                                                  "mt-2"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "p",
                                                    "type": "text",
                                                    "classes": [
                                                      "mt-2",
                                                      "text-royal-gray-500"
                                                    ],
                                                    "attributes": {
                                                      "id": "inbniw"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311 citizen engagement app is a mobile application that\n             allows citizens to report non-emergency issues to their\n             local government and receive updates on the status of\n             their requests."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "tagName": "footer",
                                            "classes": [
                                              "border-t",
                                              "border-royal-gray-300",
                                              "rounded-full",
                                              "mt-8"
                                            ],
                                            "components": [
                                              {
                                                "type": "table",
                                                "droppable": [
                                                  "tbody",
                                                  "thead",
                                                  "tfoot"
                                                ],
                                                "classes": [
                                                  "table-auto",
                                                  "border-collapse",
                                                  "w-full",
                                                  "h-14",
                                                  "border-gray-500",
                                                  "mt-0"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "tbody",
                                                    "draggable": [
                                                      "table"
                                                    ],
                                                    "droppable": [
                                                      "tr"
                                                    ],
                                                    "components": [
                                                      {
                                                        "type": "row",
                                                        "draggable": [
                                                          "thead",
                                                          "tbody",
                                                          "tfoot"
                                                        ],
                                                        "droppable": [
                                                          "th",
                                                          "td"
                                                        ],
                                                        "classes": [
                                                          "grid",
                                                          "grid-cols-2",
                                                          "items-center",
                                                          "justify-center"
                                                        ],
                                                        "components": [
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "border-r",
                                                              "px-4",
                                                              "py-4",
                                                              "text-center",
                                                              "flex",
                                                              "items-center",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/preview.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "ipimrv"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Preview"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "px-4",
                                                              "py-2",
                                                              "text-center",
                                                              "flex",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/External.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "iko3yf"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Details"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-visible",
                                  "swiper-slide-next"
                                ],
                                "attributes": {
                                  "id": "i0dg0y"
                                },
                                "components": [
                                  {
                                    "type": "link",
                                    "editable": false,
                                    "components": [
                                      {
                                        "tagName": "article",
                                        "classes": [
                                          "border",
                                          "border-royal-gray-300",
                                          "rounded-3xl",
                                          "bg-white",
                                          "AppPowered_card__TbJPi"
                                        ],
                                        "attributes": {
                                          "id": "ibfzbj"
                                        },
                                        "components": [
                                          {
                                            "classes": [
                                              "bg-opacity-20",
                                              "h-40",
                                              "rounded-t-3xl"
                                            ],
                                            "components": [
                                              {
                                                "type": "text",
                                                "classes": [
                                                  "AppPowered_Image__TcKNd"
                                                ],
                                                "attributes": {
                                                  "id": "ibahsg"
                                                },
                                                "components": [
                                                  {
                                                    "type": "textnode",
                                                    "content": " "
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "image",
                                                "attributes": {
                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/1.png",
                                                  "alt": "Image not found ",
                                                  "id": "ip2n2x"
                                                }
                                              },
                                              {
                                                "tagName": "header",
                                                "components": [
                                                  {
                                                    "tagName": "h5",
                                                    "type": "text",
                                                    "classes": [
                                                      "undefined",
                                                      "text-center"
                                                    ],
                                                    "attributes": {
                                                      "id": "ii5vgi"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "bg-white",
                                              "container",
                                              "mt-36"
                                            ],
                                            "components": [
                                              {
                                                "classes": [
                                                  "mt-2"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "p",
                                                    "type": "text",
                                                    "classes": [
                                                      "mt-2",
                                                      "text-royal-gray-500"
                                                    ],
                                                    "attributes": {
                                                      "id": "ia70m1"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311 citizen engagement app is a mobile application that\n             allows citizens to report non-emergency issues to their\n             local government and receive updates on the status of\n             their requests."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "tagName": "footer",
                                            "classes": [
                                              "border-t",
                                              "border-royal-gray-300",
                                              "rounded-full",
                                              "mt-8"
                                            ],
                                            "components": [
                                              {
                                                "type": "table",
                                                "droppable": [
                                                  "tbody",
                                                  "thead",
                                                  "tfoot"
                                                ],
                                                "classes": [
                                                  "table-auto",
                                                  "border-collapse",
                                                  "w-full",
                                                  "h-14",
                                                  "border-gray-500",
                                                  "mt-0"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "tbody",
                                                    "draggable": [
                                                      "table"
                                                    ],
                                                    "droppable": [
                                                      "tr"
                                                    ],
                                                    "components": [
                                                      {
                                                        "type": "row",
                                                        "draggable": [
                                                          "thead",
                                                          "tbody",
                                                          "tfoot"
                                                        ],
                                                        "droppable": [
                                                          "th",
                                                          "td"
                                                        ],
                                                        "classes": [
                                                          "grid",
                                                          "grid-cols-2",
                                                          "items-center",
                                                          "justify-center"
                                                        ],
                                                        "components": [
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "border-r",
                                                              "px-4",
                                                              "py-4",
                                                              "text-center",
                                                              "flex",
                                                              "items-center",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/preview.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "ie4l1e"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Preview"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "px-4",
                                                              "py-2",
                                                              "text-center",
                                                              "flex",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/External.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "iz27gp"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Details"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-visible"
                                ],
                                "attributes": {
                                  "id": "is7vuh"
                                },
                                "components": [
                                  {
                                    "type": "link",
                                    "editable": false,
                                    "components": [
                                      {
                                        "tagName": "article",
                                        "classes": [
                                          "border",
                                          "border-royal-gray-300",
                                          "rounded-3xl",
                                          "bg-white",
                                          "AppPowered_card__TbJPi"
                                        ],
                                        "attributes": {
                                          "id": "i45ewl"
                                        },
                                        "components": [
                                          {
                                            "classes": [
                                              "bg-opacity-20",
                                              "h-40",
                                              "rounded-t-3xl"
                                            ],
                                            "components": [
                                              {
                                                "type": "text",
                                                "classes": [
                                                  "AppPowered_Image__TcKNd"
                                                ],
                                                "attributes": {
                                                  "id": "ico0zk"
                                                },
                                                "components": [
                                                  {
                                                    "type": "textnode",
                                                    "content": " "
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "image",
                                                "attributes": {
                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/5.png",
                                                  "alt": "Image not found ",
                                                  "id": "iccug9"
                                                }
                                              },
                                              {
                                                "tagName": "header",
                                                "components": [
                                                  {
                                                    "tagName": "h5",
                                                    "type": "text",
                                                    "classes": [
                                                      "undefined",
                                                      "text-center"
                                                    ],
                                                    "attributes": {
                                                      "id": "if0s1x"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "classes": [
                                              "bg-white",
                                              "container",
                                              "mt-36"
                                            ],
                                            "components": [
                                              {
                                                "classes": [
                                                  "mt-2"
                                                ],
                                                "components": [
                                                  {
                                                    "tagName": "p",
                                                    "type": "text",
                                                    "classes": [
                                                      "mt-2",
                                                      "text-royal-gray-500"
                                                    ],
                                                    "attributes": {
                                                      "id": "inwepa"
                                                    },
                                                    "components": [
                                                      {
                                                        "type": "textnode",
                                                        "content": "311 citizen engagement app is a mobile application that\n                    allows citizens to report non-emergency issues to their\n                    local government and receive updates on the status of\n                    their requests."
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "tagName": "footer",
                                            "classes": [
                                              "border-t",
                                              "border-royal-gray-300",
                                              "rounded-full",
                                              "mt-8"
                                            ],
                                            "components": [
                                              {
                                                "type": "table",
                                                "droppable": [
                                                  "tbody",
                                                  "thead",
                                                  "tfoot"
                                                ],
                                                "classes": [
                                                  "table-auto",
                                                  "border-collapse",
                                                  "w-full",
                                                  "h-14",
                                                  "border-gray-500",
                                                  "mt-0"
                                                ],
                                                "components": [
                                                  {
                                                    "type": "tbody",
                                                    "draggable": [
                                                      "table"
                                                    ],
                                                    "droppable": [
                                                      "tr"
                                                    ],
                                                    "components": [
                                                      {
                                                        "type": "row",
                                                        "draggable": [
                                                          "thead",
                                                          "tbody",
                                                          "tfoot"
                                                        ],
                                                        "droppable": [
                                                          "th",
                                                          "td"
                                                        ],
                                                        "classes": [
                                                          "grid",
                                                          "grid-cols-2",
                                                          "items-center",
                                                          "justify-center"
                                                        ],
                                                        "components": [
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "border-r",
                                                              "px-4",
                                                              "py-4",
                                                              "text-center",
                                                              "flex",
                                                              "items-center",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/preview.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "iuliqf"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Preview"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "type": "cell",
                                                            "draggable": [
                                                              "tr"
                                                            ],
                                                            "classes": [
                                                              "px-4",
                                                              "py-2",
                                                              "text-center",
                                                              "flex",
                                                              "justify-center"
                                                            ],
                                                            "components": [
                                                              {
                                                                "type": "image",
                                                                "classes": [
                                                                  "inline-block"
                                                                ],
                                                                "attributes": {
                                                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/solutions/External.svg",
                                                                  "alt": "Image not found "
                                                                }
                                                              },
                                                              {
                                                                "tagName": "strong",
                                                                "type": "text",
                                                                "classes": [
                                                                  "text-base",
                                                                  "font-medium",
                                                                  "text-royal-gray-700"
                                                                ],
                                                                "attributes": {
                                                                  "id": "iptv5l"
                                                                },
                                                                "components": [
                                                                  {
                                                                    "type": "textnode",
                                                                    "content": "Details"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-pagination",
                              "swiper-pagination-clickable",
                              "swiper-pagination-bullets",
                              "swiper-pagination-horizontal"
                            ],
                            "components": [
                              {
                                "tagName": "span",
                                "classes": [
                                  "swiper-pagination-bullet"
                                ]
                              },
                              {
                                "tagName": "span",
                                "classes": [
                                  "swiper-pagination-bullet"
                                ]
                              },
                              {
                                "tagName": "span",
                                "classes": [
                                  "swiper-pagination-bullet",
                                  "swiper-pagination-bullet-active"
                                ]
                              },
                              {
                                "tagName": "span",
                                "classes": [
                                  "swiper-pagination-bullet"
                                ]
                              },
                              {
                                "tagName": "span",
                                "classes": [
                                  "swiper-pagination-bullet"
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "classes": [
                      "mt-24"
                    ],
                    "components": [
                      {
                        "classes": [
                          "container",
                          "mx-auto",
                          "text-center",
                          "mb-12"
                        ],
                        "components": [
                          {
                            "tagName": "h1",
                            "type": "text",
                            "classes": [
                              "AppsPowered"
                            ],
                            "attributes": {
                              "id": "i24j7k"
                            },
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Apps Powered by Mobius "
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "classes": [
                          "swiper",
                          "swipermenu",
                          "swiper-initialized",
                          "swiper-horizontal"
                        ],
                        "components": [
                          {
                            "classes": [
                              "swiper-wrapper"
                            ],
                            "attributes": {
                              "id": "ikf8pl"
                            },
                            "components": [
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "ibflji"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/12.png",
                                      "alt": "Image not found ",
                                      "id": "i75akl"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-prev"
                                ],
                                "attributes": {
                                  "id": "iopuhi"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/13.png",
                                      "alt": "Image not found ",
                                      "id": "irrnqz"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-active"
                                ],
                                "attributes": {
                                  "id": "iaagdm"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/14.png",
                                      "alt": "Image not found ",
                                      "id": "i85wvi"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide",
                                  "swiper-slide-next"
                                ],
                                "attributes": {
                                  "id": "iu8xxu"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/appstore.png",
                                      "alt": "Image not found ",
                                      "id": "io1v7n"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "iz0o1k"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/drive.png",
                                      "alt": "Image not found ",
                                      "id": "i9ukd1"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "ism5fm"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/playstore.png",
                                      "alt": "Image not found ",
                                      "id": "igxifk"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "iz9lfl"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/slack.png",
                                      "alt": "Image not found ",
                                      "id": "iyfb0i"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "imm9bh"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/Twilio.png",
                                      "alt": "Image not found ",
                                      "id": "ina6sc"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "i4j856"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/zoom.png",
                                      "alt": "Image not found ",
                                      "id": "isp4n1"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "iogepv"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/12.png",
                                      "alt": "Image not found ",
                                      "id": "i8r782"
                                    }
                                  }
                                ]
                              },
                              {
                                "classes": [
                                  "swiper-slide"
                                ],
                                "attributes": {
                                  "id": "izqt51"
                                },
                                "components": [
                                  {
                                    "type": "image",
                                    "attributes": {
                                      "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/apps/13.png",
                                      "alt": "Image not found ",
                                      "id": "i1yuu6"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "classes": [
                              "swiper-pagination"
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "classes": [
                      "Security_bgmain3__aPeSZ"
                    ],
                    "components": [
                      {
                        "classes": [
                          "flex",
                          "mt-0"
                        ],
                        "components": [
                          {
                            "classes": [
                              "Security_contx__EJzhf",
                              "container"
                            ],
                            "components": [
                              {
                                "tagName": "h3",
                                "type": "text",
                                "classes": [
                                  "Security_prebuilt__G1yq0"
                                ],
                                "attributes": {
                                  "id": "i6ewbw"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Enterprise Grade Trust and Security"
                                  }
                                ]
                              },
                              {
                                "tagName": "p",
                                "type": "text",
                                "classes": [
                                  "Security_prebuilt2__MXAOB"
                                ],
                                "attributes": {
                                  "id": "imtnin"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Mobius Suite integrates with thousands of Apps, APIs, Content, IT& Infrasturcture providers across various domains throughout theglobe"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "components": [
                              {
                                "type": "image",
                                "classes": [
                                  "Security_secImg__Rsu6U"
                                ],
                                "attributes": {
                                  "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/Security/8.png",
                                  "alt": "Image not found "
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tagName": "section",
                    "classes": [
                      "pre",
                      "pt-12"
                    ],
                    "components": [
                      {
                        "classes": [
                          "container",
                          "pre-con"
                        ],
                        "components": [
                          {
                            "tagName": "h1",
                            "type": "text",
                            "classes": [
                              "pre-heading",
                              "mx-auto",
                              "pt-12"
                            ],
                            "attributes": {
                              "id": "i4mgwi"
                            },
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Discover Mobius DTaaS - Your Ultimate Accelerator for Business Success!"
                              }
                            ]
                          },
                          {
                            "tagName": "h1",
                            "type": "text",
                            "classes": [
                              "pre-content",
                              "mx-auto"
                            ],
                            "attributes": {
                              "id": "iq24ow"
                            },
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Revolutionize your business with Mobius DTaaS, the all-in-one platform for rapid digital transformation. Harness the synergy of five cutting-edge tools to drive innovation, efficiency, and growth."
                              }
                            ]
                          },
                          {
                            "type": "link",
                            "classes": [
                              "buttons_btn__w-Xuo",
                              "buttons_btn_filled__JunTx",
                              "mx-auto",
                              "mt-12"
                            ],
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Book a Demo "
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tagName": "footer",
                "classes": [
                  "mt-16",
                  "md:mt-20",
                  "pb-14",
                  "mt-24"
                ],
                "components": [
                  {
                    "tagName": "hr",
                    "void": true
                  },
                  {
                    "classes": [
                      "mx-auto",
                      "px-4",
                      "mt-24"
                    ],
                    "components": [
                      {
                        "classes": [
                          "footer_topcont__HEtEp",
                          "md:grid-cols-2"
                        ],
                        "attributes": {
                          "id": "footer"
                        },
                        "components": [
                          {
                            "tagName": "nav",
                            "components": [
                              {
                                "tagName": "h5",
                                "type": "text",
                                "classes": [
                                  "footer_header__YbxgP"
                                ],
                                "attributes": {
                                  "id": "idwjji"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Firma"
                                  }
                                ]
                              },
                              {
                                "tagName": "ul",
                                "classes": [
                                  "footer_cards1__gj4YS",
                                  "mt-5",
                                  "md:mt-9"
                                ],
                                "components": [
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/overview"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Über"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/overview"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Dienste"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/overview"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Leitung"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/overview"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Karrieren"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/overview"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Kontakt"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/overview"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Allgemeine Geschäftsbedingungen"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tagName": "nav",
                            "components": [
                              {
                                "tagName": "h5",
                                "type": "text",
                                "classes": [
                                  "footer_header__YbxgP"
                                ],
                                "attributes": {
                                  "id": "iwskun"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Lösungen"
                                  }
                                ]
                              },
                              {
                                "tagName": "ul",
                                "classes": [
                                  "footer_cards1__gj4YS",
                                  "mt-5",
                                  "md:mt-9"
                                ],
                                "components": [
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/solutions"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Telekommunikation &; 5G"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/solutions"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Medien &; Rundfunk"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/solutions"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Smartcities & Behörden"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/solutions"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "IT-Lösungen & Automatisierung"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/solutions"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "HR-Technik"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tagName": "nav",
                            "components": [
                              {
                                "tagName": "h5",
                                "type": "text",
                                "classes": [
                                  "footer_header__YbxgP"
                                ],
                                "attributes": {
                                  "id": "ivj48s"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Produkt"
                                  }
                                ]
                              },
                              {
                                "tagName": "ul",
                                "classes": [
                                  "footer_cards1__gj4YS",
                                  "mt-5",
                                  "md:mt-9"
                                ],
                                "components": [
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/products"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "OpsMax"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/products"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "KI-Zoom-Bot"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/products"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Zwischen"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/products"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Slack-Bot"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/products"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Marktplatz"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tagName": "nav",
                            "components": [
                              {
                                "tagName": "h5",
                                "type": "text",
                                "classes": [
                                  "footer_header__YbxgP"
                                ],
                                "attributes": {
                                  "id": "iimn4d"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Bahnsteig"
                                  }
                                ]
                              },
                              {
                                "tagName": "ul",
                                "classes": [
                                  "footer_cards1__gj4YS",
                                  "mt-5",
                                  "md:mt-9"
                                ],
                                "components": [
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/platform"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Pascal Intelligence(PI)"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/platform"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "BoltzmanBot(BOB)"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/platform"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Viele"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/platform"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Vinci"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mb-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "classes": [
                                          "nav-link"
                                        ],
                                        "attributes": {
                                          "href": "/platform"
                                        },
                                        "components": [
                                          {
                                            "type": "textnode",
                                            "content": "Hallo Cracy"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "classes": [
                          "footer_bottomfolder__1UdlU",
                          "text-center",
                          "mt-12",
                          "md:mt-20"
                        ],
                        "components": [
                          {
                            "tagName": "nav",
                            "components": [
                              {
                                "tagName": "ul",
                                "classes": [
                                  "flex",
                                  "flex-row",
                                  "justify-center",
                                  "items-center"
                                ],
                                "components": [
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mx-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "editable": false,
                                        "attributes": {
                                          "href": "#"
                                        },
                                        "components": [
                                          {
                                            "type": "image",
                                            "attributes": {
                                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/linkedin.svg",
                                              "alt": "Image not found "
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mx-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "editable": false,
                                        "attributes": {
                                          "href": "#"
                                        },
                                        "components": [
                                          {
                                            "type": "image",
                                            "attributes": {
                                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/instagram.svg",
                                              "alt": "Instagram Icon"
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mx-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "editable": false,
                                        "attributes": {
                                          "href": "#"
                                        },
                                        "components": [
                                          {
                                            "type": "image",
                                            "attributes": {
                                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/twitter.svg",
                                              "alt": "Twitter Icon"
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "tagName": "li",
                                    "classes": [
                                      "mx-4"
                                    ],
                                    "components": [
                                      {
                                        "type": "link",
                                        "editable": false,
                                        "attributes": {
                                          "href": "#"
                                        },
                                        "components": [
                                          {
                                            "type": "image",
                                            "attributes": {
                                              "src": "https://mobius-marketing-website-g1x4kfs9t-mobius-marketing-website.vercel.app/images/icons/facebook.svg",
                                              "alt": "Facebook Icon"
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "classes": [
                              "mt-11"
                            ],
                            "components": [
                              {
                                "tagName": "small",
                                "type": "text",
                                "attributes": {
                                  "id": "iwpqrg"
                                },
                                "components": [
                                  {
                                    "type": "textnode",
                                    "content": "Alle Rechte vorbehalten. 2023 Urheberrecht"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
      
    const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="editor"></div></body></html>`);
    global.window = dom.window;
    global.document = dom.window.document;
    global.DOMParser = new JSDOM().window.DOMParser;

    const editor = grapesjs.init({
      container: '#editor',
    });

    const { Parser } = editor;
    
    try {    
           const HTML = Parser.getHtml(configObject)
           console.log(HTML)
    } catch (error) {
        console.log(error)
    }

}  

module.exports = parseGrapeToHTML