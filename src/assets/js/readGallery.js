(function($){
  //  let box = document.getElementsByClassName('charts-gallery')
  //  let arrLength=new Array(6).fill("");
  //  let arrgallery=[]
  //  let arrtitle=["Car sales over the years"]
  //  console.log("🚀 ~ file: readGallery.js ~ line 6 ~ arrtitle", arrtitle)
  // for(let i=0;i<arrLength.length;i++){
  //   arrgallery.push(    '<div className="chart-gallery-grid"><div><img src="../assets/images/gallery/gallery'+i+'.jpg" alt=""></div>  <div className="galary-description"><div className="galary-word">'+arrtitle[0]+' </div><div className="galary-button"> <button id="gallery-launch" value="example'+i+'">Launch</button></div></div></div>'
  //   )
  // }
  // document.getElementsByClassName('charts-gallery').appendChild(arrgallery.join(''))
  // console.log("🚀 ~ file: readGallery.js ~ line 13 ~ box.innerHTML", box.innerHTML)

//   js = document.getElementById('js'),
//     list = document.getElementById('list');
// list.appendChild(js);

    $('.imageContainer img').click(function(e){
        let getValue = e.target.getAttribute("src")
        let result = getValue.replace(/[^0-9]/ig,"")
        let data = [
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "light",
                  "emotion": "trustworthy",
                  "background-image": "https://narchart.github.io/editor/background/company_background.png"
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "funded status"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.5,
                      "corner-radius": 0
                    }
                  }
                },
                {
                  "add": "title",
                  "text": "Fun facts about dead startups!",
                  "style": {
                    "font-color": "white",
                    "font-size": 30,
                    "font-family": "Georgia",
                    "font-style": "italic",
                    "background-color": "#79AF00",
                    "position": "top-left"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies that go public have the longest mean survival time.",
                  "style": {
                    "font-color": "black",
                    "font-size": 15,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "funded status"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "fill",
                  "target": [
                    {
                      "field": "funded status",
                      "value": "Public"
                    }
                  ]
                }
              ]
            },
          
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "dark",
                  "emotion": "disturbing"
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "funded status"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.3,
                      "corner-radius": 3,
                      "stroke-width": 1,
                      "stroke": "white"
                    }
                  },
                  "style": {
                    "background-image": "https://narchart.github.io/editor/background/company_background2.png"
                  }
                },
                {
                  "add": "title",
                  "text": "Fun facts about dead startups!",
                  "style": {
                    "font-color": "#FE5C34",
                    "font-size": 37,
                    "font-family": "Georgia",
                    "font-style": "italic",
                    "position": "top-left"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies that go public have the longest mean survival time.",
                  "style": {
                    "font-color": "#FE5C34",
                    "font-size": 15,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "funded status"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "fade",
                  "target": []
                },
                {
                  "add": "annotation",
                  "method": "fill",
                  "target": [
                    {
                      "field": "funded status",
                      "value": "Public"
                    }
                  ],
                  "style": {
                    "color": "#ABABAB"
                  }
                },
                {
                  "add": "annotation",
                  "method": "label",
                  "target": [
                    {
                      "field": "funded status",
                      "value": "Public"
                    }
                  ],
                  "style": {
                    "text": "3409",
                    "font-color": "#FF4B19",
                    "font-size": 20,
                    "font-weight": "bold",
                    "font-style": "italic"
                  }
                }
              ]
            }
          
         ,
          
           
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "light",
                  "emotion": ""
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "funded status"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.3,
                      "corner-radius": 0,
                      "stroke-width": 1,
                      "stroke-opacity": 0.7,
                      "stroke-color": "white",
                      "fill-opacity": 1
                    }
                  },
                  "style": {}
                },
                {
                  "add": "title",
                  "text": "Fun facts about dead startups!",
                  "style": {
                    "font-color": "white",
                    "font-size": 37,
                    "font-family": "Georgia",
                    "font-style": "italic",
                    "position": "top-left",
                    "background-image": "https://narchart.github.io/editor/background/company_banner.png"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies that go public have the longest mean survival time.",
                  "style": {
                    "font-color": "#364A45",
                    "font-size": 19,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "funded status"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "reference",
                  "target": [
                    {
                      "field": "funded status",
                      "value": "Public"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "fill",
                  "target": [
                    {
                      "field": "funded status",
                      "value": "Public"
                    }
                  ]
                }
              ]
            }
               
       ,
          
           
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "dark",
                  "emotion": "calm"
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "funded status"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.3,
                      "corner-radius": 3,
                      "stroke-width": 1,
                      "stroke-opacity": 0.7,
                      "stroke-color": "white"
                    }
                  },
                  "style": {
                    "mask-image": "https://narchart.github.io/editor/background/company_mask.png"
                  }
                },
                {
                  "add": "title",
                  "text": "Dead Startups",              
                  "style": {
                    "font-color": "#C7FFFF",
                    "font-size": 37,
                    "font-family": "Georgia",
                    "font-style": "italic",
                    "divide-line-width": 1,
                    "divide-line-color": "#C7FFFF",
                    "position": "top-center"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies that go public have the longest mean survival time.",
                  "style": {
                    "font-color": "white",
                    "font-size": 15,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "funded status"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "label",
                  "target": [
                    {
                      "field": "funded status",
                      "value": "Public"
                    }
                  ],
                  "style": {
                    "font-color": "#C7FFFF",
                    "font-size": 20,
                    "font-weight": "bold"
                  }
                }
              ]
            }
          
         ,
          
           
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "light",
                  "emotion": "positive"
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "industry"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.3,
                      "corner-radius": 0
                    }
                  },
                  "style": {}
                },
                {
                  "add": "title",
                  "text": "Dead Startups",
                  "style": {
                    "font-color": "black",
                    "font-size": 30,
                    "font-family": "Georgia",
                    "font-style": "italic",
                    "font-weight": "bold",
                    "border-width": 3,
                    "border-color": "#C09F02",
                    "position": "top-center"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies that go public have the longest mean survival time.",
                  "style": {
                    "font-color": "#C09F02",
                    "font-weight": "bold",
                    "font-size": 15,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "industry"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "desaturate",
                  "target": []
                },
                {
                  "add": "annotation",
                  "method": "fill",
                  "target": [
                    {
                      "field": "industry",
                      "value": "New Industry"
                    }
                  ],
                  "style": {
                    "color": "#F9CF00"
                  }
                },
                {
                  "add": "annotation",
                  "method": "glow",
                  "target": [
                    {
                      "field": "industry",
                      "value": "New Industry"
                    }
                  ]
                }
              ]
            }
          
         ,
          
           
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "dark",
                  "emotion": "negative"
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "industry"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.3,
                      "corner-radius": 3
                    }
                  },
                  "style": {}
                },
                {
                  "add": "title",
                  "text": "Dead Startups",
                  "style": {
                    "font-color": "#FFCD00",
                    "font-size": 34,
                    "font-family": "Georgia",
                    "font-weight": "bold",
                    "background-image": "https://narchart.github.io/editor/background/company_banner2.png",
                    "position": "top-center"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies from the new industry have the longest mean survival time.",
                  "style": {
                    "font-color": "#FFCD00",
                    "font-weight": "bold",
                    "font-size": 15,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "industry"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "fill",
                  "target": [
                    {
                      "field": "industry",
                      "value": "New Industry"
                    }
                  ],
                  "style": {}
                },
                {
                  "add": "annotation",
                  "method": "arrow",
                  "target": [
                    {
                      "field": "industry",
                      "value": "New Industry"
                    }
                  ],
                  "style": {
                    "color": "white"
                  }
                }
              ]
            }
          
         ,
          
           
            {
              "data": {
                "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
                "schema": [
                  {
                    "field": "industry",
                    "type": "categorical"
                  },
                  {
                    "field": "funded status",
                    "type": "categorical"
                  },
                  {
                    "field": "cause of failure",
                    "type": "categorical"
                  },
                  {
                    "field": "broken year",
                    "type": "temporal"
                  },
                  {
                    "field": "survival time",
                    "type": "numerical"
                  },
                  {
                    "field": "location",
                    "type": "categorical"
                  }
                ]
              },
              "actions": [
                {
                  "add": "config",
                  "mode": "light",
                  "emotion": ""
                },
                {
                  "select": [
                    {
                      "field": "survival time",
                      "aggregate": "average"
                    },
                    {
                      "field": "location"
                    },
                    {
                      "field": "funded status"
                    },
                    {
                      "field": "broken year"
                    },
                    {
                      "field": "industry"
                    },
                    {
                      "field": "cause of failure"
                    }
                  ],
                  "groupby": [
                    {
                      "field": "industry"
                    }
                  ],
                  "filter": []
                },
                {
                  "add": "chart",
                  "mark": {
                    "type": "bar",
                    "style": {
                      "bin-spacing": 0.1,
                      "corner-radius": 0
                    }
                  },
                  "style": {
                    "mask-image": "https://narchart.github.io/editor/background/company_mask2.png"
                  }
                },
                {
                  "add": "title",
                  "text": "Dead Startups",
                  "style": {
                    "font-color": "white",
                    "font-size": 34,
                    "font-family": "Georgia",
                    "font-weight": "bold",
                    "background-image": "https://narchart.github.io/editor/background/company_banner3.png",
                    "position": "top-center"
                  }
                },
                {
                  "add": "caption",
                  "text": "Companies from the new industry have the longest mean survival time.",
                  "style": {
                    "font-color": "black",
                    "font-weight": "bold",
                    "font-size": 15,
                    "position": "top-left"
                  }
                },
                {
                  "add": "group",
                  "actions": [
                    {
                      "add": "encoding",
                      "channel": "x",
                      "field": "industry"
                    },
                    {
                      "add": "encoding",
                      "channel": "y",
                      "field": "survival time"
                    }
                  ]
                },
                {
                  "add": "annotation",
                  "method": "reference",
                  "target": [
                    {
                      "field": "industry",
                      "value": "New Industry"
                    }
                  ],
                  "style": {
                    "color": "red"
                  }
                }
              ]
            }
          
         ,
        
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
              "schema": [
                {
                  "field": "industry",
                  "type": "categorical"
                },
                {
                  "field": "funded status",
                  "type": "categorical"
                },
                {
                  "field": "cause of failure",
                  "type": "categorical"
                },
                {
                  "field": "broken year",
                  "type": "temporal"
                },
                {
                  "field": "survival time",
                  "type": "numerical"
                },
                {
                  "field": "location",
                  "type": "categorical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "dark",
                "emotion": "negative",
                "background-image": "https://narchart.github.io/editor/background/company_background3.png"
              },
              {
                "select": [
                  {
                    "field": "survival time",
                    "aggregate": "average"
                  },
                  {
                    "field": "location"
                  },
                  {
                    "field": "funded status"
                  },
                  {
                    "field": "broken year"
                  },
                  {
                    "field": "industry"
                  },
                  {
                    "field": "cause of failure"
                  }
                ],
                "groupby": [
                  {
                    "field": "industry"
                  },
                  {
                    "field": "location"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "bar",
                  "style": {
                    "bin-spacing": 0.4,
                    "corner-radius": 0
                  }
                },
                "style": {}
              },
              {
                "add": "title",
                "text": "Dead Startups",
                "style": {
                  "font-color": "white",
                  "font-size": 44,
                  "font-family": "Times New Roman",
                  "font-weight": "bold",
                  "position": "top-center"
                }
              },
              {
                "add": "caption",
                "text": "Agricultural companies have the lowest mean survival time.",
                "style": {
                  "font-color": "white",
                  "font-family": "Times New Roman",
                  "font-weight": "bold",
                  "font-size": 18,
                  "position": "top-center"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "industry"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "survival time"
                  }
                ]
              },
              {
                "add": "encoding",
                "channel": "color",
                "field": "location"
              },
              {
                "add": "annotation",
                "method": "tooltip",
                "target": [
                  {
                    "field": "industry",
                    "value": "Agriculture"
                  }
                ],
                "text": "Agriculture",
                "style": {
                  "tooltip-color": "#FF807F",
                  "font-size": 14,
                  "font-family": "Georgia",
                  "font-weight": "bold"
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
              "schema": [
                {
                  "field": "industry",
                  "type": "categorical"
                },
                {
                  "field": "funded status",
                  "type": "categorical"
                },
                {
                  "field": "cause of failure",
                  "type": "categorical"
                },
                {
                  "field": "broken year",
                  "type": "temporal"
                },
                {
                  "field": "survival time",
                  "type": "numerical"
                },
                {
                  "field": "location",
                  "type": "categorical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "serious"
              },
              {
                "select": [
                  {
                    "field": "survival time",
                    "aggregate": "average"
                  },
                  {
                    "field": "location"
                  },
                  {
                    "field": "funded status"
                  },
                  {
                    "field": "broken year"
                  },
                  {
                    "field": "industry"
                  },
                  {
                    "field": "cause of failure"
                  }
                ],
                "groupby": [
                  {
                    "field": "industry"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "bar",
                  "style": {
                    "bin-spacing": 0.2,
                    "corner-radius": 0
                  }
                },
                "style": {}
              },
              {
                "add": "title",
                "text": "Dead Startups in Different Industries",
                "style": {
                  "font-color": "white",
                  "font-size": 36,
                  "font-family": "Times New Roman",
                  "font-weight": "bold",
                  "background-color": "#3C3C3C",
                  "position": "top-center"
                }
              },
              {
                "add": "caption",
                "text": "Companies from the new industry have the longest mean survival time.",
                "style": {
                  "font-color": "black",
                  "font-weight": "bold",
                  "font-family": "Times New Roman",
                  "font-size": 19,
                  "position": "top-left"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "industry"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "survival time"
                  }
                ]
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "annotation",
                    "method": "label",
                    "target": [
                      {
                        "field": "industry",
                        "value": "New Industry"
                      }
                    ],
                    "style": {
                      "font-color": "red"
                    }
                  },
                  {
                    "add": "annotation",
                    "method": "fill",
                    "target": [
                      {
                        "field": "industry",
                        "value": "New Industry"
                      }
                    ]
                  },
                  {
                    "add": "annotation",
                    "method": "circle",
                    "target": [
                      {
                        "field": "industry",
                        "value": "New Industry"
                      }
                    ]
                  }
                ]
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/deadstartup.csv",
              "schema": [
                {
                  "field": "industry",
                  "type": "categorical"
                },
                {
                  "field": "funded status",
                  "type": "categorical"
                },
                {
                  "field": "cause of failure",
                  "type": "categorical"
                },
                {
                  "field": "broken year",
                  "type": "temporal"
                },
                {
                  "field": "survival time",
                  "type": "numerical"
                },
                {
                  "field": "location",
                  "type": "categorical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "dark",
                "emotion": "trustworthy"
              },
              {
                "select": [
                  {
                    "field": "survival time",
                    "aggregate": "average"
                  },
                  {
                    "field": "location"
                  },
                  {
                    "field": "funded status"
                  },
                  {
                    "field": "broken year"
                  },
                  {
                    "field": "industry"
                  },
                  {
                    "field": "cause of failure"
                  }
                ],
                "groupby": [
                  {
                    "field": "industry"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "bar",
                  "style": {
                    "bin-spacing": 0.1,
                    "corner-radius": 4,
          "stroke-width":1
                  }
                },
                "style": {}
              },
              {
                "add": "image",
                "style": {
                  "image": "https://narchart.github.io/editor/background/company_image.png",
                  "x": 580,
                  "y": 75,
                  "width": 40,
                  "height": 40
                }
              },
              {
                "add": "title",
                "text": "Dead Startups in Different Industries",
                "style": {
                  "font-size": 36,
                  "font-family": "Times New Roman",
                  "font-weight": "bold",
                  "divide-line-width": 1,
                  "divide-line-color": "yellow",
                  "position": "top-center"
                }
              },
              {
                "add": "caption",
                "text": "Companies from the new industry have the longest mean survival time.",
                "style": {
                  "font-color": "white",
                  "font-weight": "bold",
                  "font-family": "Times New Roman",
                  "font-size": 16,
                  "position": "top-left"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "industry"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "survival time"
                  }
                ]
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "annotation",
                    "method": "fade",
                    "target": []
                  },
                  {
                    "add": "annotation",
                    "method": "fill",
                    "target": [
                      {
                        "field": "industry",
                        "value": "New Industry"
                      }
                    ]
                  }
                ]
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "negative",
                "background-image": "https://narchart.github.io/editor/background/line_background.png"
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "black",
                    "stroke-width": "3",
                    "point": true,
                    "point-radius": "10",
                    "point-fill": "",
                    "point-stroke": "black",
                    "point-stroke-width": "2"
                  }
                }
              },
              {
                "add": "title",
                "text": "COVID-19: Confirmed Cases",
                "style": {
                  "font-size": 34,
                  "font-color": "white",
                  "font-family": "Times New Roman",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-width": 0,
                  "position": "top-left",
                  "background-color": "#3C3C3C",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of confirmed cases reached its peak on March 19.",
                "style": {
                  "font-color": "black",
                  "font-family": "Times New Roman",
                  "font-weight": "bold",
                  "font-size": 18,
                  "position": "top-left"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Confirmed Cases"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "fill",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/19"
                  }
                ],
                "style": {}
              },
              {
                "add": "annotation",
                "method": "reference",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/19"
                  }
                ],
                "style": {}
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [{
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [{
                "add": "config",
                "mode": "dark",
                "emotion": "disturbing",
                "background-image": "",
                "background-color": "white"
              },
              {
                "select": [{
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [{
                  "field": "Date"
                }],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "",
                    "stroke-width": "5",
                    "point": false,
                    "point-radius": "10",
                    "point-fill": "",
                    "point-stroke": "black",
                    "point-stroke-width": "0"
                  }
                },
                "style": {
                  "background-image": "https://narchart.github.io/editor/background/line_chart_background.png"
                }
              },
              {
                "add": "title",
                "text": "COVID-19: Confirmed Cases",
                "style": {
                  "font-size": 38,
                  "font-color": "#FE0100",
                  "font-family": "Arial Black",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-width": 0,
                  "position": "top-left",
                  "background-color": "",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of confirmed cases reached its peak on March 19.",
                "style": {
                  "font-color": "white",
                  "font-family": "Times New Roman",
                  "font-weight": "bold",
                  "font-size": 18,
                  "position": "top-left"
                }
              },
              {
                "add": "group",
                "actions": [{
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Confirmed Cases"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "circle",
                "target": [{
                  "field": "Date",
                  "value": "2020/3/19"
                }],
                "style": {
                  "color": "#FE0100",
                  "height": 22,
                  "width": 22
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "",
                "background-image": "",
                "background-color": "white"
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "#73C8F3",
                    "stroke-width": "2",
                    "point": true,
                    "point-radius": "8",
                    "point-fill": "",
                    "point-stroke": "white",
                    "point-stroke-width": "1"
                  }
                },
                "style": {
                  "background-image": ""
                }
              },
              {
                "add": "title",
                "text": "Confirmed Cases in March",
                "style": {
                  "font-size": 36,
                  "font-color": "white",
                  "font-family": "Georgia",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-width": 0,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "https://narchart.github.io/editor/background/line-banner.png",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of confirmed cases reached its peak on March 19.",
                "style": {
                  "font-color": "black",
                  "font-family": "Georgia",
                  "font-weight": "bold",
                  "font-size": 14,
                  "position": "top-center"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Confirmed Cases"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "fill",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/19"
                  }
                ],
                "style": {
                }
              },
              {
                "add": "annotation",
                "method": "contour",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/19"
                  }
                ],
                "style": {
                  "color": "black"
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "dark",
                "emotion": "trustworthy",
                "background-image": "",
                "background-color": ""
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "#ACE02E",
                    "stroke-width": "2",
                    "point": true,
                    "point-radius": "8",
                    "point-fill": "white",
                    "point-stroke": "#ACE02E",
                    "point-stroke-width": "2"
                  }
                },
                "style": {
                  "background-image": ""
                }
              },
              {
                "add": "title",
                "text": "Confirmed Cases in March",
                "style": {
                  "font-size": 38,
                  "font-family": "Georgia",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-width": 0,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of confirmed cases reached its peak on March 19.",
                "style": {
                  "font-color": "white",
                  "font-family": "Georgia",
                  "font-style": "italic",
                  "font-weight": "bold",
                  "font-size": 16,
                  "position": "top-center"
                }
              },
              {
                "add": "image",
                "style": {
                  "image": "https://narchart.github.io/editor/background/line_image.png",
                  "x": 80,
                  "y": 80,
                  "width": 92,
                  "height": 130
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Confirmed Cases"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "circle",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/19"
                  }
                ],
                "style": {
                  "color": "#FCBD00"
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "calm",
                "background-image": "",
                "background-color": ""
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "#DDDDDD",
                    "stroke-width": "3",
                    "point": true,
                    "point-radius": "10",
                    "point-fill": "",
                    "point-stroke": "",
                    "point-stroke-width": ""
                  }
                },
                "style": {
                  "background-image": ""
                }
              },
              {
                "add": "title",
                "text": "Recovered Cases of Patients with COVID-19",
                "style": {
                  "font-size": 26,
                  "font-family": "Georgia",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-color": "#70A2B1",
                  "border-width": 3,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of recovered cases reached its peak on March 15.",
                "style": {
                  "font-color": "black",
                  "font-family": "Georgia",
                  "font-style": "",
                  "font-weight": "bold",
                  "font-size": 15,
                  "position": "top-left"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Recovered"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "desaturate",
                "target": []
              },
              {
                "add": "annotation",
                "method": "fill",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/15"
                  }
                ],
                "style": {
                }
              },
              {
                "add": "annotation",
                "method": "glow",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/15"
                  }
                ],
                "style": {
                  "color": "#FFEE9E"
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "dark",
                "emotion": "trustworthy",
                "background-image": "",
                "background-color": ""
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "white",
                    "stroke-width": "3",
                    "point": true,
                    "point-radius": "14",
                    "point-fill": "black",
                    "point-stroke": "white",
                    "point-stroke-width": "1",
                    "background-image": "https://narchart.github.io/editor/background/line_mask.png"
                  }
                },
                "style": {
                  "background-image": ""
                }
              },
              {
                "add": "title",
                "text": "Recovered Cases of Patients with COVID-19",
                "style": {
                  "font-size": 24,
                  "font-color": "#FFCD00",
                  "font-family": "Georgia",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-color": "",
                  "border-width": 0,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "https://narchart.github.io/editor/background/line_banner2.png",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of recovered cases reached its peak on March 15.",
                "style": {
                  "font-color": "#FFCD00",
                  "font-family": "Georgia",
                  "font-style": "",
                  "font-weight": "bold",
                  "font-size": 15,
                  "position": "top-center"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Recovered"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "reference",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/15"
                  }
                ],
                "style": {
                  "color": "white"
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "exciting",
                "background-image": "",
                "background-color": ""
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "#FF7602",
                    "stroke-width": "3",
                    "point": true,
                    "point-radius": "7",
                    "point-fill": "",
                    "point-stroke": "",
                    "point-stroke-width": "",
                    "background-image": ""
                  }
                },
                "style": {
                  "background-image": "https://narchart.github.io/editor/background/line_chart_background2.png"
                }
              },
              {
                "add": "title",
                "text": "COVID-19",
                "style": {
                  "font-size": 45,
                  "font-color": "#FF7602",
                  "font-family": "Arial Black",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-color": "",
                  "border-width": 0,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "https://narchart.github.io/editor/background/line_banner3.png",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "The number of recovered cases reached its peak on March 15.",
                "style": {
                  "font-color": "black",
                  "font-family": "Arial",
                  "font-style": "",
                  "font-weight": "bold",
                  "font-size": 16,
                  "position": "top-center"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Recovered"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "tooltip",
                "target": [
                  {
                    "field": "Date",
                    "value": "2020/3/15"
                  }
                ],
                "text": "1362",
                "style": {
                  "tooltip-color": "#FF7602",
                  "font-color": "white",
                  "font-family": "Arial Black",
                  "font-size": 14
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "dark",
                "emotion": "positive",
                "background-image": "https://narchart.github.io/editor/background/line_background2.png",
                "background-color": ""
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "white",
                    "stroke-width": "1",
                    "point": true,
                    "point-radius": "10",
                    "point-fill": "black",
                    "point-stroke": "white",
                    "point-stroke-width": 1,
                    "background-image": ""
                  }
                },
                "style": {
                  "background-image": ""
                }
              },
              {
                "add": "title",
                "text": "Recovered Cases",
                "style": {
                  "font-size": 24,
                  "font-color": "white",
                  "font-family": "Arial Black",
                  "font-style": "",
                  "font-weight": "bold",
                  "border-color": "",
                  "border-width": 0,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "",
                  "top-padding": 10
                }
              },
              {
                "add": "caption",
                "text": "The number of recovered cases showed an overall stable trend in March.",
                "style": {
                  "font-color": "white",
                  "font-family": "Arial",
                  "font-style": "",
                  "font-weight": "bold",
                  "font-size": 15,
                  "position": "top-center"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Recovered"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "regression",
                "target": [],
                "style": {
                  "stroke-width": 4,
                  "stroke-dasharray": "8,7"
                }
              }
            ]
          }
          
       ,
      
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/covid19World.csv",
              "schema": [
                {
                  "field": "Date",
                  "type": "temporal",
                  "pictype": "time"
                },
                {
                  "field": "Country",
                  "type": "geographical",
                  "subtype": "world",
                  "pictype": "map"
                },
                {
                  "field": "Confirmed Cases",
                  "type": "numerical"
                },
                {
                  "field": "Recovered",
                  "type": "numerical"
                },
                {
                  "field": "Deaths",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "dark",
                "emotion": "",
                "background-image": "",
                "background-color": ""
              },
              {
                "select": [
                  {
                    "field": "Recovered",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Confirmed Cases",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Deaths",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Date"
                  }
                ],
                "groupby": [
                  {
                    "field": "Date"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "line",
                  "style": {
                    "stroke": "white",
                    "stroke-width": "1",
                    "point": true,
                    "point-radius": "10",
                    "point-fill": "black",
                    "point-stroke": "white",
                    "point-stroke-width": 1,
                    "background-image": ""
                  }
                },
                "style": {
                  "background-image": ""
                }
              },
              {
                "add": "title",
                "text": "Deaths of COVID-19",
                "style": {
                  "font-size": 24,
                  "font-color": "white",
                  "font-family": "Arial Black",
                  "font-style": "",
                  "font-weight": "bold",
                  "divide-line-color": "white",
                  "divide-line-width": 3,
                  "position": "top-center",
                  "background-color": "",
                  "background-image": "",
                  "top-padding": 10
                }
              },
              {
                "add": "caption",
                "text": "R.I.P 🕯️",
                "style": {
                  "font-color": "white",
                  "font-family": "Arial",
                  "font-style": "",
                  "font-weight": "bold",
                  "font-size": 15,
                  "position": "top-right"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Date"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Deaths"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "regression",
                "target": [],
                "style": {
                  "stroke-width": 5,
                  "stroke-dasharray": "10,8"
                }
              }
            ]
          }
          
       ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "negative",
              "background-image": "https://cdn.pixabay.com/photo/2018/05/12/22/43/lane-3394768_1280.jpg"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 0,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 5,
                  "stroke": "blue",
                  "stroke-width": 2,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-color": "white"
              }
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "top-left",
                "font-family": "Calibri",
                "font-weight": "bold",
                "font-color": "white",
                "font-size": 30,
                "font-style": "italic",
                "border-width": 2,
                "border-color": "orange",
                "background-color": "black"
              }
            },
            {
              "add": "caption",
              "text": "Ford has the highest proportion of sales among all the brands.",
              "style": {
                "font-family": "Calibri",
                "font-size": 20,
                "font-weight": "bold",
                "font-color": "white",
                "position": "top-left"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [],
              "style": {
                "font-size": 14,
                "color": "black"
              }
            },
            {
              "add": "annotation",
              "method": "fade",
              "target": []
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ]
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "exciting"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 0,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 5,
                  "stroke": "blue",
                  "stroke-width": 2,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {
                "mask-image": "https://narchart.github.io/editor/background/pie_mask.png"
              }
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "top-left",
                "font-family": "Calibri",
                "font-weight": "bold",
                "font-size": 30,
                "font-color": "#FCCF00",
                "font-style": "italic",
                "divide-line-width": 2,
                "divide-line-color": "#FCCF00"
              }
            },
            {
              "add": "caption",
              "text": "Produced by @lxy",
              "style": {
                "font-family": "Calibri",
                "font-size": 20,
                "font-weight": "regular",
                "font-color": "white",
                "position": "top-right"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [],
              "style": {
                "font-size": 14,
                "color": "black"
              }
            },
            {
              "add": "annotation",
              "method": "fade",
              "target": []
            },
            {
              "add": "annotation",
              "method": "glow",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "text": "Ford",
                "font-color": "yellow",
                "font-size": 16,
                "font-weight": "bold",
                "offset-y":-20
              }
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "negative",
              "background-image": "https://narchart.github.io/editor/background/pie_background2.png"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 100,
                  "outer-radius": 220,
                  "text-radius": 240,
                  "corner-radius": 0,
                  "stroke": "blue",
                  "stroke-width": 2,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-color": "black",
                "font-size": 34,
                "font-style": "italic",
                "top-padding": 30,
                "background-color": "white"
              }
            },
            {
              "add": "caption",
              "text": "Ford has the highest proportion of sales among all the brands.",
              "style": {
                "font-family": "Times",
                "font-size": 20,
                "font-weight": "bold",
                "font-color": "black",
                "position": "top-left",
                "top-padding": 20
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "annotation",
              "method": "desaturate",
              "target": []
            },
            {
              "add": "annotation",
              "method": "contour",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "stroke-width": 6,
                "stroke-color": "red"
              }
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "text": "Ford",
                "font-color": "white",
        "font-weight": "bold",
        "font-size": 30
        
              }
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "playful"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 100,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 0,
                  "stroke": "blue",
                  "stroke-width": 5,
                  "stroke-opacity": 0,
                  "fill": "antiquewhite",
                  "fill-opacity": 0.9
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-color": "black",
                "font-size": 34,
                "font-style": "italic",
                "top-padding": 20,
                "background-color": "antiquewhite"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "annotation",
              "method": "texture",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "background-image": "https://narchart.github.io/editor/background/pie_background2.png"
              }
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "text": "Car brand: Ford",
                "font-size": 20,
                "font-family": "Georgia"
              }
            },
            {
              "add": "image",
              "style": {
                "image": "https://narchart.github.io/editor/background/car_image.png",
                "x": 460,
                "y": 100,
                "width": 90,
                "height": 90
              }
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "trustworthy"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 100,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 0,
                  "stroke": "blue",
                  "stroke-width": 5,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-image": "https://narchart.github.io/editor/background/car_background4.jpg"
              }
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 34,
                "font-style": "italic",
                "divide-line-width": 3,
                "divide-line-color": "green"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "encoding",
              "channel": "color",
              "field": "Brand"
            },
            {
              "add": "annotation",
              "method": "glow",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "arrow",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "color": "black"
              }
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "text": "Car brand: Ford",
                "font-size": 20,
                "font-family": "Georgia"
              }
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "calm"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 100,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 0,
                  "stroke": "blue",
                  "stroke-width": 5,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "top-center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 34,
                "font-style": "italic",
                "divide-line-width": 3,
                "divide-line-color": "green"
              }
            },
            {
              "add": "caption",
              "text": "3 brands accounted for about a half of all the sales.",
              "style": {
                "position": "top-center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 20,
                "font-style": "italic"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "encoding",
              "channel": "color",
              "field": "Brand"
            },
            {
              "add": "annotation",
              "method": "symbol",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "icon-url": "https://narchart.github.io/editor/icon/rank-1.png",
                "font-size": 20,
                "font-family": "Georgia"
              }
            },
            {
              "add": "annotation",
              "method": "symbol",
              "target": [
                {
                  "field": "Brand",
                  "value": "BMW"
                }
              ],
              "style": {
                "icon-url": "https://narchart.github.io/editor/icon/rank-2.png",
                "font-size": 20,
                "font-family": "Georgia"
              }
            },
            {
              "add": "annotation",
              "method": "symbol",
              "target": [
                {
                  "field": "Brand",
                  "value": "Toyota"
                }
              ],
              "style": {
                "icon-url": "https://narchart.github.io/editor/icon/rank-3.png",
                "font-size": 20,
                "font-family": "Georgia"
              }
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "negative"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 100,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 0,
                  "stroke": "blue",
                  "stroke-width": 5,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-image": "https://narchart.github.io/editor/background/car_background2.png"
              }
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "top-center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 34,
                "font-style": "italic"
              }
            },
            {
              "add": "caption",
              "text": "3 brands accounted for about a half of all the sales.",
              "style": {
                "position": "top-center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 20,
                "font-style": "italic"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Brand",
                  "value": "BMW"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Brand",
                  "value": "Toyota"
                }
              ]
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "exciting"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 0,
                  "outer-radius": 200,
                  "text-radius": 210,
                  "corner-radius": 20,
                  "stroke": "blue",
                  "stroke-width": 5,
                  "stroke-opacity": 0,
                  "fill-opacity": 1
                }
              },
              "style": {
                "mask-image": "https://narchart.github.io/editor/background/pie_mask.png"
              }
            },
            {
              "add": "title",
              "text": "Which car brand has the highest sales?",
              "style": {
                "position": "top-center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 34,
                "font-style": "italic"
              }
            },
            {
              "add": "caption",
              "text": "Ford accounted for about 30% of all the sales.",
              "style": {
                "position": "top-center",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 20,
                "font-style": "italic"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "tooltip",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "text": "Ford",
              "style": {
                "font-size": 20
              }
            }
          ]
        }
          
     ,
      
        
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
            "schema": [
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Brand",
                "type": "categorical"
              },
              {
                "field": "Category",
                "type": "categorical"
              },
              {
                "field": "Sales",
                "type": "numerical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "playful"
            },
            {
              "select": [
                {
                  "field": "Sales",
                  "aggregate": "count"
                },
                {
                  "field": "Brand"
                }
              ],
              "groupby": [
                {
                  "field": "Brand"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "arc",
                "style": {
                  "inner-radius": 30,
                  "outer-radius": 220,
                  "text-radius": 240,
                  "corner-radius": 20,
                  "stroke": "white",
                  "stroke-width": 2,
                  "stroke-opacity": 0.5,
                  "fill-opacity": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Car Sales Data! 😄",
              "style": {
                "position": "top-center",
                "font-family": "Comic Sans MS",
                "font-weight": "bold",
                "font-size": 34
              }
            },
            {
              "add": "caption",
              "text": "Do you know the total sales of the famous car brands?",
              "style": {
                "font-family": "Comic Sans MS",
                "font-size": 18,
                "font-weight": "bold",
                "font-color": "black",
                "position": "top-center"
              }
            },
            {
              "add": "encoding",
              "channel": "theta",
              "field": "Sales"
            },
            {
              "add": "encoding",
              "channel": "color",
              "field": "Brand"
            },
            {
              "add": "annotation",
              "method": "texture",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "background-image": "https://narchart.github.io/editor/background/pie_mask2.png"
              }
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "Ford"
                }
              ],
              "style": {
                "text": "Ford",
                "font-family": "Comic Sans MS",
                "font-color": "black",
                "font-weight": "bold",
                "font-size": 20
              }
            },
            {
              "add": "annotation",
              "method": "texture",
              "target": [
                {
                  "field": "Brand",
                  "value": "BMW"
                }
              ],
              "style": {
                "background-image": "https://narchart.github.io/editor/background/pie_mask3.png"
              }
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "BMW"
                }
              ],
              "style": {
                "text": "BMW",
                "font-family": "Comic Sans MS",
                "font-color": "black",
                "font-weight": "bold",
                "font-size": 20
              }
            },
            {
              "add": "annotation",
              "method": "texture",
              "target": [
                {
                  "field": "Brand",
                  "value": "Toyota"
                }
              ],
              "style": {
                "background-image": "https://narchart.github.io/editor/background/pie_mask4.png"
              }
            },
            {
              "add": "annotation",
              "method": "label",
              "target": [
                {
                  "field": "Brand",
                  "value": "Toyota"
                }
              ],
              "style": {
                "text": "Toyota",
                "font-family": "Comic Sans MS",
                "font-color": "black",
                "font-weight": "bold",
                "font-size": 20
              }
            }
          ]
        }
          
     ,
        
          
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/sales.csv",
              "schema": [
                {
                  "field": "Year",
                  "type": "temporal"
                },
                {
                  "field": "Brand",
                  "type": "categorical"
                },
                {
                  "field": "Category",
                  "type": "categorical"
                },
                {
                  "field": "Sales",
                  "type": "numerical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "negative",
                "background-image": "https://cdn.pixabay.com/photo/2018/05/12/22/43/lane-3394768_1280.jpg"
              },
              {
                "select": [
                  {
                    "field": "Sales",
                    "aggregate": "count"
                  },
                  {
                    "field": "Brand"
                  }
                ],
                "groupby": [
                  {
                    "field": "Brand"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "arc",
                  "style": {
                    "inner-radius": 100,
                    "outer-radius": 220,
                    "text-radius": 240,
                    "corner-radius": 10,
                    "stroke": "white",
                    "stroke-width": 2,
                    "stroke-opacity": 0.5,
                    "fill-opacity": 1
                  }
                },
                "style": {}
              },
              {
                "add": "title",
                "text": "Which car brands have the highest sales?",
                "style": {
                  "position": "center",
                  "font-family": "Times",
                  "font-weight": "bold",
                  "font-color": "black",
                  "font-size": 34,
                  "font-style": "italic",
                  "background-color": "white"
                }
              },
              {
                "add": "caption",
                "text": "3 brands accounted for about a half of all the sales.",
                "style": {
                  "font-family": "Times",
                  "font-size": 20,
                  "font-weight": "bold",
                  "font-color": "black",
                  "position": "top-left",
                  "background-color": "white"
                }
              },
              {
                "add": "encoding",
                "channel": "theta",
                "field": "Sales"
              },
              {
                "add": "encoding",
                "channel": "color",
                "field": "Brand"
              },
              {
                "add": "annotation",
                "method": "arrow",
                "target": [
                  {
                    "field": "Brand",
                    "value": "Ford"
                  }
                ],
                "style": {
                  "color": "white"
                }
              },
              {
                "add": "annotation",
                "method": "label",
                "target": [
                  {
                    "field": "Brand",
                    "value": "Ford"
                  }
                ],
                "style": {
                  "text": "Ford",
                  "font-color": "white",
                  "font-weight": "bold",
                  "font-size": 20
                }
              },
              {
                "add": "annotation",
                "method": "arrow",
                "target": [
                  {
                    "field": "Brand",
                    "value": "BMW"
                  }
                ],
                "style": {
                  "color": "white"
                }
              },
              {
                "add": "annotation",
                "method": "label",
                "target": [
                  {
                    "field": "Brand",
                    "value": "BMW"
                  }
                ],
                "style": {
                  "text": "BMW",
                  "font-color": "white",
                  "font-weight": "bold",
                  "font-size": 20
                }
              },
              {
                "add": "annotation",
                "method": "arrow",
                "target": [
                  {
                    "field": "Brand",
                    "value": "Toyota"
                  }
                ],
                "style": {
                  "color": "white"
                }
              },
              {
                "add": "annotation",
                "method": "label",
                "target": [
                  {
                    "field": "Brand",
                    "value": "Toyota"
                  }
                ],
                "style": {
                  "text": "Toyota",
                  "font-color": "white",
                  "font-weight": "bold",
                  "font-size": 20
                }
              }
            ]
          }
          
       ,
        
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "exciting",
              "background-image": "https://narchart.github.io/editor/background/car_background.jpg"
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "average"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "average"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "average"
                },
                {
                  "field": "Weight",
                  "aggregate": "average"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "stroke-color": "orange",
                  "stroke-width": 1,
                  "stroke-opacity": 0.4,
                  "fill-opacity": 0.7
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Fun facts about cars!",
              "style": {
                "position": "left",
                "background-color": "#FF7602",
                "font-family": "Georgia",
                "font-size": 40,
                "font-color": "white"
              }
            },
            {
              "add": "caption",
              "text": "This chart shows the car that has the highest Miles per gallon.",
              "style": {
                "position": "left"
              }
            },
            {
              "add": "image",
              "style": {
                "image": "https://narchart.github.io/editor/background/car_image.png",
                "x": 438,
                "y": 25,
                "width": 182,
                "height": 101
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Miles per Gallon"
                }
              ]
            },
            {
              "add": "encoding",
              "channel": "color",
              "field": "Origin"
            },
            {
              "add": "annotation",
              "method": "reference",
              "target": [
                {
                  "field": "Name",
                  "value": "mazda glc"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "arrow",
              "target": [
                {
                  "field": "Name",
                  "value": "mazda glc"
                }
              ],
              "style": {
                "color": "#FFF200"
              }
            }
          ]
        }
          
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "positive",
              "background-image": "https://narchart.github.io/editor/background/car_background2.png"
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "max"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "max"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "max"
                },
                {
                  "field": "Weight",
                  "aggregate": "max"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.5
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Some basic information about cars",
              "style": {
                "position": "left",
                "background-image": "https://narchart.github.io/editor/background/car_banner.png",
                "font-family": "Gil Sans",
                "font-weight": "bold",
                "font-size": 34,
                "font-color": "yellow",
                "font-style": "italic"
              }
            },
            {
              "add": "caption",
              "text": "The relationship between horsepower, miles per gallon and acceleration.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 19,
                "font-weight": "regular",
                "font-color": "#FFFFFF",
                "position": "left"
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Miles per Gallon"
                }
              ]
            },
            {
              "add": "encoding",
              "channel": "size",
              "field": "Acceleration"
            },
            {
              "add": "annotation",
              "method": "desaturate",
              "target": []
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Name",
                  "value": "mazda glc"
                }
              ],
              "style": {
                "color": "#F9CF00"
              }
            },
            {
              "add": "annotation",
              "method": "glow",
              "target": [
                {
                  "field": "Name",
                  "value": "mazda glc"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "contour",
              "target": [
                {
                  "field": "Name",
                  "value": "mazda glc"
                }
              ],
              "style": {
                "stroke-width": 3,
                "color": "#FF7602"
              }
            }
          ]
        }
          
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "",
              "background-image": "https://narchart.github.io/editor/background/car_background3.jpg"
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.4,
                  "stroke-width": 1,
                  "stroke-opacity": 0.7,
                  "fill": "#90E1DC"
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Some basic information about cars",
              "style": {
                "position": "left",
                "font-family": "Gil Sans",
                "font-weight": "bold",
                "font-size": 30,
                "font-color": "#15777C",
                "font-style": "italic",
                "border-width": 2,
                "border-color": "#15777C"
              }
            },
            {
              "add": "caption",
              "text": "The relationship between horsepower, miles per gallon and acceleration.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 16,
                "font-weight": "regular",
                "font-color": "#364A45",
                "position": "left"
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Miles per Gallon"
                }
              ]
            },
            {
              "add": "encoding",
              "channel": "size",
              "field": "Acceleration"
            },
            {
              "add": "annotation",
              "method": "circle",
              "target": [
                {
                  "field": "Horsepower",
                  "value": 230
                }
              ],
              "style": {
                "color": "#F9CF00"
              }
            },
            {
              "add": "annotation",
              "method": "tooltip",
              "target": [
                {
                  "field": "Horsepower",
                  "value": 230
                }
              ],
              "text": "Car name: pontiac grand prix",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 12,
                "font-weight": "regular",
                "font-color": "white",
                "tooltip-color": "#00797D"
              }
            }
          ]
        }
          
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "trustworthy"
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.5,
                  "stroke-color": "#FCCF00",
                  "stroke-width": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Cars: MPG vs Horsepower",
              "style": {
                "position": "top-center",
                "font-family": "Gil Sans",
                "font-weight": "bold",
                "font-size": 34,
                "font-color": "#FCCF00",
                "font-style": "italic",
                "divide-line-width": 2,
                "divide-line-color": "#FCCF00"
              }
            },
            {
              "add": "caption",
              "text": "The relationship between horsepower and miles per gallon is negative.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 16,
                "font-weight": "regular",
                "font-color": "#FFFFFF",
                "position": "top-center"
              }
            },
            {
              "add": "image",
              "style": {
                "image": "https://narchart.github.io/editor/background/arrow.png",
                "x": 520,
                "y": 123,
                "width": 60,
                "height": 60
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Miles per Gallon"
                }
              ]
            },
            {
              "add": "encoding",
              "channel": "size",
              "field": "Acceleration"
            },
            {
              "add": "annotation",
              "method": "regression",
              "target": [],
              "style": {
                "color": "white"
              }
            }
          ]
        }
          
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [{
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [{
              "add": "config",
              "mode": "light",
              "emotion": "playful",
              "background-image": "https://narchart.github.io/editor/background/car_background4.jpg"
            },
            {
              "select": [{
                  "field": "Horsepower",
                  "aggregate": "min"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "min"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "min"
                },
                {
                  "field": "Weight",
                  "aggregate": "min"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [{
                "field": "Name"
              }],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.5,
                  "stroke-color": "#90A290",
                  "stroke-width": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Association between car weight and horsepower",
              "style": {
                "position": "left",
                "font-family": "Gil Sans",
                "font-weight": "bold",
                "font-size": 24,
                "font-color": "white",
                "font-style": "italic",
                "background-color": "#FE268E"
              }
            },
            {
              "add": "caption",
              "text": "The color encodes the origin of the cars.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 18,
                "font-style": "italic",
                "font-weight": "regular",
                "font-color": "#364A45",
                "position": "left"
              }
            },
            {
              "add": "group",
              "actions": [{
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Weight"
                }
              ]
            },
            {
              "add": "encoding",
              "channel": "color",
              "field": "Origin"
            },
            {
              "add": "annotation",
              "method": "arrow",
              "target": [{
                "field": "Weight",
                "value": 3086
              }],
              "style": {
                "color": "#F9CF00"
              }
            },
            {
              "add": "annotation",
              "method": "reference",
              "target": [{
                "field": "Weight",
                "value": 3086
              }],
              "style": {
                "color": "black"
              }
            },
            {
              "add": "annotation",
              "method": "tooltip",
              "target": [{
                "field": "Weight",
                "value": 3086
              }],
              "text": "Car name: buick estate wagon(sw)(1970)",
              "style": {
                "font-size": 11,
                "font-weight": "bold",
                "font-color": "white",
                "tooltip-color": "#FE268E"
              }
            }
          ]
        }
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "serious"
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.5,
                  "stroke-width": 1,
                  "stroke-color": "#FCCF00"
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Cars: Weight vs Horsepower",
              "style": {
                "position": "top-center",
                "background-image": "https://narchart.github.io/editor/background/car_banner2.png",
                "font-family": "Gil Sans",
                "font-weight": "bold",
                "font-size": 34,
                "font-color": "#CE5456",
                "font-style": "italic"
              }
            },
            {
              "add": "caption",
              "text": "The relationship between weight and horsepower is negative.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 19,
                "font-weight": "regular",
                "font-color": "white",
                "position": "top-center"
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Weight"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "fade",
              "target": []
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Weight",
                  "value": 3086
                }
              ],
              "style": {
                "color": "#CE5456"
              }
            },
            {
              "add": "annotation",
              "method": "symbol",
              "target": [
                {
                  "field": "Weight",
                  "value": 3086
                }
              ],
              "style": {
                "icon-url": "https://narchart.github.io/editor/icon/outlier.png",
                "size": 30,
                "offset-y": -10
              }
            },
            {
              "add": "annotation",
              "method": "circle",
              "target": [
                {
                  "field": "Weight",
                  "value": 3086
                }
              ],
              "style": {
                "stroke-width": 2
              }
            }
          ]
        }
          
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": ""
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.6,
                  "stroke-color": "#A4A4A4",
                  "stroke-width": 1,
                  "stroke-opacity": 0.5,
                  "fill": "#E8E8E8",
                  "background-image": "https://narchart.github.io/editor/icon/car1.jpg"
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Association between car weight and horsepower",
              "style": {
                "position": "left",
                "font-family": "Gil Sans",
                "font-weight": "bold",
                "font-size": 24,
                "font-color": "black",
                "border-width": 1,
                "border-color": "black"
              }
            },
            {
              "add": "caption",
              "text": "The relationship between car wight and horsepower is positive.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 20,
                "font-weight": "regular",
                "font-color": "black",
                "position": "left"
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Weight"
                }
              ]
            }
          ]
        }
          
     ,
      
       
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [{
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [{
              "add": "config",
              "mode": "dark",
              "emotion": "playful"
            },
            {
              "select": [{
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [{
                "field": "Name"
              }],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "point",
                "style": {
                  "fill-opacity": 0.5,
                  "stroke-color": "#90A290",
                  "stroke-width": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Cars: Weight vs Horsepower",
              "style": {
                "position": "left",
                "font-family": "Times New Roman",
                "font-weight": "bold",
                "font-size": 44,
                "font-color": "orange",
                "font-style": "italic"
              }
            },
            {
              "add": "caption",
              "text": "This scatterplot shows the relationship between car weight and horsepower, and the circle size encodes acceleration.",
              "style": {
                "font-family": "Gil Sans",
                "font-size": 16,
                "font-weight": "regular",
                "font-color": "white",
                "position": "right"
              }
            },
            {
              "add": "group",
              "actions": [{
                  "add": "encoding",
                  "channel": "x",
                  "field": "Horsepower"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Weight"
                },
                {
                  "add": "encoding",
                  "channel": "color",
                  "field": "Origin"
                },
                {
                  "add": "encoding",
                  "channel": "size",
                  "field": "Acceleration"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "symbol",
              "target": [{
                "field": "Weight",
                "value": 3086
              }],
              "style": {
                "icon-url": "https://narchart.github.io/editor/icon/outlier.png",
                "size": 34
              }
            }
          ]
        }
          
     ,
        
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
              "schema": [
                {
                  "field": "Name",
                  "type": "categorical"
                },
                {
                  "field": "Miles per Gallon",
                  "type": "numerical"
                },
                {
                  "field": "Cylinders",
                  "type": "numerical"
                },
                {
                  "field": "Displacement",
                  "type": "numerical"
                },
                {
                  "field": "Horsepower",
                  "type": "numerical"
                },
                {
                  "field": "Weight",
                  "type": "numerical"
                },
                {
                  "field": "Acceleration",
                  "type": "numerical"
                },
                {
                  "field": "Year",
                  "type": "temporal"
                },
                {
                  "field": "Origin",
                  "type": "categorical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": ""
              },
              {
                "select": [
                  {
                    "field": "Horsepower",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Miles per Gallon",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Acceleration",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Weight",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Name"
                  },
                  {
                    "field": "Origin"
                  }
                ],
                "groupby": [
                  {
                    "field": "Name"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "point",
                  "style": {
                    "fill-opacity": 0.4,
                    "stroke-width": 1,
                    "stroke-color": "white",
                    "stroke-opacity": 0.7,
                    "fill": "grey"
                  }
                },
                "style": {}
              },
              {
                "add": "title",
                "text": "Association between car weight and horsepower",
                "style": {
                  "position": "left",
                  "font-family": "Gil Sans",
                  "font-weight": "bold",
                  "font-size": 24,
                  "font-color": "black"
                }
              },
              {
                "add": "caption",
                "text": "The relationship between car wight and horsepower is positive.",
                "style": {
                  "font-family": "Gil Sans",
                  "font-size": 19,
                  "font-weight": "regular",
                  "font-color": "black",
                  "position": "left"
                }
              },
              {
                "add": "group",
                "actions": [
                  {
                    "add": "encoding",
                    "channel": "x",
                    "field": "Horsepower"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Weight"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "desaturate",
                "target": []
              },
              {
                "add": "annotation",
                "method": "fill",
                "target": [
                  {
                    "field": "Horsepower",
                    "value": 230
                  }
                ],
                "style": {
                  "color": "black"
                }
              },
              {
                "add": "annotation",
                "method": "reference",
                "target": [
                  {
                    "field": "Horsepower",
                    "value": 230
                  }
                ],
                "style": {
                  "color": "black"
                }
              }
            ]
          }
          
       ,
        
         
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
              "schema": [{
                  "field": "Name",
                  "type": "categorical"
                },
                {
                  "field": "Miles per Gallon",
                  "type": "numerical"
                },
                {
                  "field": "Cylinders",
                  "type": "numerical"
                },
                {
                  "field": "Displacement",
                  "type": "numerical"
                },
                {
                  "field": "Horsepower",
                  "type": "numerical"
                },
                {
                  "field": "Weight",
                  "type": "numerical"
                },
                {
                  "field": "Acceleration",
                  "type": "numerical"
                },
                {
                  "field": "Year",
                  "type": "temporal"
                },
                {
                  "field": "Origin",
                  "type": "categorical"
                }
              ]
            },
            "actions": [{
                "add": "config",
                "mode": "dark",
                "emotion": "exciting"
              },
              {
                "select": [{
                    "field": "Horsepower",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Miles per Gallon",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Acceleration",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Weight",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Name"
                  },
                  {
                    "field": "Origin"
                  }
                ],
                "groupby": [{
                  "field": "Name"
                }],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "point",
                  "style": {
                    "fill-opacity": 1,
                    "stroke-color": "#90A290",
                    "stroke-width": 1
                  }
                },
                "style": {}
              },
              {
                "add": "title",
                "text": "Cars: Weight vs Horsepower",
                "style": {
                  "position": "top-center",
                  "font-family": "Gil Sans",
                  "font-weight": "bold",
                  "font-size": 34,
                  "font-color": "#FCCF00",
                  "font-style": "italic",
                  "divide-line-width": 2,
                  "divide-line-color": "#FCCF00"
                }
              },
              {
                "add": "caption",
                "text": "Produced by @wyq",
                "style": {
                  "font-family": "Gil Sans",
                  "font-size": 16,
                  "font-weight": "regular",
                  "font-color": "white",
                  "position": "top-right"
                }
              },
              {
                "add": "group",
                "actions": [{
                    "add": "encoding",
                    "channel": "x",
                    "field": "Horsepower"
                  },
                  {
                    "add": "encoding",
                    "channel": "y",
                    "field": "Weight"
                  },
                  {
                    "add": "encoding",
                    "channel": "color",
                    "field": "Origin"
                  }
                ]
              },
              {
                "add": "annotation",
                "method": "arrow",
                "target": [{
                  "field": "Weight",
                  "value": 3086
                }],
                "style": {
                  "color": "white"
                }
              },
              {
                "add": "annotation",
                "method": "fade",
                "target": []
              },
              {
                "add": "annotation",
                "method": "fill",
                "target": [{
                  "field": "Weight",
                  "value": 3086
                }],
                "style": {
                  "color": "yellow"
                }
              }
            ]
          }
          
       ,
        
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "average"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "average"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "average"
                },
                {
                  "field": "Weight",
                  "aggregate": "average"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "average"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": [
                {
                  "field": "Weight",
                  "op": "more",
                  "value": 4000
                }
              ]
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {}
              }
            },
            {
              "add": "title",
              "text": "Which car has the highest horsepower?",
              "style": {
                "font-size": "22"
              }
            },
            {
              "add": "caption",
              "text": "Among all the cars that have a weight > 4000, pontiac grand prix has the highest horsepower.",
              "style": {
                "font-size": "16"
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Year"
                },
                {
                  "add": "encoding",
                  "channel": "y",
                  "field": "Origin"
                },
                {
                  "add": "encoding",
                  "channel": "size",
                  "field": "Horsepower"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "circle",
              "target": [
                {
                  "field": "Name",
                  "value": "pontiac grand prix"
                }
              ]
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "calm"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "average"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "average"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "average"
                },
                {
                  "field": "Weight",
                  "aggregate": "average"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "average"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": [
                {
                  "field": "Weight",
                  "op": "less",
                  "value": 4000
                }
              ]
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {}
              }
            },
            {
              "add": "title",
              "text": "The trend of car production",
              "style": {
                "font-color": "green"
              }
            },
            {
              "add": "caption",
              "text": "The car production is increasing over time.",
              "style": {
                "font-color": "green"
              }
            },
            {
              "add": "group",
              "actions": [
                {
                  "add": "encoding",
                  "channel": "x",
                  "field": "Year"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "regression",
              "target": []
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "numerical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "temporal"
              },
              {
                "field": "Origin",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "positive"
            },
            {
              "select": [
                {
                  "field": "Horsepower",
                  "aggregate": "max"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "max"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "max"
                },
                {
                  "field": "Weight",
                  "aggregate": "max"
                },
                {
                  "field": "Name"
                },
                {
                  "field": "Origin"
                }
              ],
              "groupby": [
                {
                  "field": "Name"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {}
              }
            },
            {
              "add": "title",
              "text": "Introducing Ford f250",
              "style": {
                "font-size": 30,
                "font-family": "Georgia",
                "background-color": "green",
                "top-padding": 30
              }
            },
            {
              "add": "caption",
              "text": "Color encodes the origin of the cars.",
              "style": {
                "background-color": "green"
              }
            },
            {
              "add": "image",
              "style": {
                "image": "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "x": 470,
                "y": 100,
                "width": 120,
                "height": 120
              }
            },
            {
              "add": "encoding",
              "channel": "color",
              "field": "Origin"
            },
            {
              "add": "annotation",
              "method": "tooltip",
              "target": [
                {
                  "field": "Name",
                  "value": "ford f250"
                }
              ],
              "text": "Ford f250",
              "style": {
                "font-size": 14,
                "tooltip-color": "#f2f2f2"
              }
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "sum"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "blue",
                  "stroke-opacity": 1,
                  "stroke-width": 0,
                  "fill-opacity": 1,
                  "background-image": "https://narchart.github.io/editor/icon/car2.jpg"
                }
              },
              "style": {
                "background-color": "#F2F2F2"
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Origin"
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "exciting"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "sum"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "blue",
                  "stroke-opacity": 1,
                  "stroke-width": 0,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-image": "https://narchart.github.io/editor/background/car_background.jpg"
              }
            },
            {
              "add": "title",
              "text": "Who Produced the Most Cars?",
              "style": {
                "font-size": 40,
                "font-family": "Times",
                "font-style": "italic",
                "font-weight": "bold",
                "border-width": 3,
                "position": "top-center",
                "top-padding": 10
              }
            },
            {
              "add": "caption",
              "text": "The number of cars, categorized by year and origin",
              "style": {
                "font-color": "white",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 18,
                "position": "top-center",
                "top-padding": 10
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Origin"
            },
            {
              "add": "encoding",
              "channel": "y",
              "field": "Year"
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "dark",
              "emotion": "serious"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "sum"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "white",
                  "stroke-opacity": 0.5,
                  "stroke-width": 0.5,
                  "fill-opacity": 1
                }
              },
              "style": {}
            },
            {
              "add": "title",
              "text": "Who Produced the Most Cars?",
              "style": {
                "font-size": 32,
                "font-color": "brown",
                "font-family": "Times",
                "font-style": "italic",
                "font-weight": "bold",
                "border-width": 3,
                "border-color": "brown",
                "position": "top-left",
                "background-image": "https://narchart.github.io/editor/background/car_banner.png",
                "top-padding": 10
              }
            },
            {
              "add": "caption",
              "text": "According to the data analysis, USA produced the most cars in 1982.",
              "style": {
                "font-color": "white",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 18,
                "position": "top-left",
                "top-padding": 10
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Origin"
            },
            {
              "add": "encoding",
              "channel": "y",
              "field": "Year"
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Origin",
                  "value": "USA"
                },
                {
                  "field": "Year",
                  "value": "1982"
                }
              ]
            },
            {
              "add": "image",
              "style": {
                "image": "https://narchart.github.io/editor/background/car_image.png",
                "x": 500,
                "y": 180,
                "width": 80,
                "height": 80
              }
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "trustworthy",
              "background-image": "https://narchart.github.io/editor/background/car_background4.jpg"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "sum"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "white",
                  "stroke-opacity": 0.5,
                  "stroke-width": 0.5,
                  "fill-opacity": 1
                }
              },
              "style": {"background-color": "white"}
            },
            {
              "add": "title",
              "text": "Who Produced the Most Cars?",
              "style": {
                "font-size": 40,
                "font-family": "Times",
                "font-style": "italic",
                "font-weight": "bold",
                "border-width": 0,
                "border-color": "brown",
                "position": "top-left",
                "background-image": "",
                "top-padding": 10
              }
            },
            {
              "add": "caption",
              "text": "According to the data analysis, USA produced the most cars in 1982.",
              "style": {
                "font-color": "black",
                "font-family": "Times",
                "font-weight": "bold",
                "font-size": 18,
                "position": "top-left",
                "top-padding": 10
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Origin"
            },
            {
              "add": "encoding",
              "channel": "y",
              "field": "Year"
            },
            {
              "add": "annotation",
              "method": "fade",
              "target": []
            },
            {
              "add": "annotation",
              "method": "glow",
              "target": [
                {
                  "field": "Origin",
                  "value": "USA"
                },
                {
                  "field": "Year",
                  "value": "1982"
                }
              ]
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "calm",
              "background-image": "https://narchart.github.io/editor/background/car_background4.jpg"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "average"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "average"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "average"
                },
                {
                  "field": "Weight",
                  "aggregate": "average"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "average"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "white",
                  "stroke-opacity": 1,
                  "stroke-width": 0.5,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-color": ""
              }
            },
            {
              "add": "title",
              "text": "Which cars are the heaviest and the lightest?",
              "style": {
                "font-size": 27,
                "font-family": "Calibri",
                "font-style": "italic",
                "font-weight": "bold",
                "border-width": 0,
                "border-color": "brown",
                "position": "top-left",
                "background-image": "",
                "top-padding": 10
              }
            },
            {
              "add": "caption",
              "text": "The heaviest and the lightest cars were all produced in 1971.",
              "style": {
                "font-color": "black",
                "font-family": "Calibri",
                "font-weight": "bold",
                "font-size": 18,
                "position": "top-left",
                "top-padding": 10
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Origin"
            },
            {
              "add": "encoding",
              "channel": "y",
              "field": "Year"
            },
            {
              "add": "encoding",
              "channel": "size",
              "field": "Weight"
            },
            {
              "add": "annotation",
              "method": "desaturate",
              "target": []
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Name",
                  "value": "pontiac safari (sw)"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "tooltip",
              "target": [
                {
                  "field": "Name",
                  "value": "pontiac safari (sw)"
                }
              ],
              "text": "pontiac safari (sw): 5140",
              "style": {
              }
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Name",
                  "value": "datsun 1200"
                }
              ]
            },
            {
              "add": "annotation",
              "method": "tooltip",
              "target": [
                {
                  "field": "Name",
                  "value": "datsun 1200"
                }
              ],
              "text": "datsun 1200: 1613",
              "style": {}
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "calm",
              "background-image": "https://narchart.github.io/editor/background/car_background4.jpg"
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "sum"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "sum"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "sum"
                },
                {
                  "field": "Weight",
                  "aggregate": "sum"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "white",
                  "stroke-opacity": 1,
                  "stroke-width": 0.5,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-color": ""
              }
            },
            {
              "add": "title",
              "text": "Comparing the weight of the cars",
              "style": {
                "font-size": 30,
                "font-family": "Calibri",
                "font-style": "italic",
                "font-weight": "bold",
                "border-width": 0,
                "border-color": "brown",
                "position": "top-left",
                "background-image": "",
                "background-color": "white",
                "top-padding": 10
              }
            },
            {
              "add": "caption",
              "text": "Japan produces the lightest cars.",
              "style": {
                "font-color": "black",
                "font-family": "Calibri",
                "font-weight": "regular",
                "font-size": 18,
                "position": "top-left",
                "top-padding": 10
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Origin"
            },
            {
              "add": "encoding",
              "channel": "y",
              "field": "Year"
            },
            {
              "add": "encoding",
              "channel": "size",
              "field": "Weight"
            },
            {
              "add": "annotation",
              "method": "desaturate",
              "target": []
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Origin",
                  "value": "Japan"
                }
              ],
              "style": {
                "color": "darksalmon"
              }
            }
          ]
        }
          
     ,
      
      
        {
          "data": {
            "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
            "schema": [
              {
                "field": "Name",
                "type": "categorical"
              },
              {
                "field": "Miles per Gallon",
                "type": "numerical"
              },
              {
                "field": "Cylinders",
                "type": "categorical"
              },
              {
                "field": "Displacement",
                "type": "numerical"
              },
              {
                "field": "Horsepower",
                "type": "numerical"
              },
              {
                "field": "Weight",
                "type": "numerical"
              },
              {
                "field": "Acceleration",
                "type": "numerical"
              },
              {
                "field": "Year",
                "type": "categorical"
              },
              {
                "field": "Origin",
                "type": "categorical"
              },
              {
                "field": "dataid",
                "type": "categorical"
              }
            ]
          },
          "actions": [
            {
              "add": "config",
              "mode": "light",
              "emotion": "playful",
              "background-image": ""
            },
            {
              "select": [
                {
                  "field": "Name"
                },
                {
                  "field": "Miles per Gallon",
                  "aggregate": "average"
                },
                {
                  "field": "Cylinders"
                },
                {
                  "field": "Displacement",
                  "aggregate": "average"
                },
                {
                  "field": "Horsepower",
                  "aggregate": "average"
                },
                {
                  "field": "Weight",
                  "aggregate": "average"
                },
                {
                  "field": "Acceleration",
                  "aggregate": "sum"
                },
                {
                  "field": "Year"
                },
                {
                  "field": "Origin"
                },
                {
                  "field": "dataid"
                }
              ],
              "groupby": [
                {
                  "field": "dataid"
                }
              ],
              "filter": []
            },
            {
              "add": "chart",
              "mark": {
                "type": "unit",
                "style": {
                  "stroke-color": "white",
                  "stroke-opacity": 1,
                  "stroke-width": 0.5,
                  "fill-opacity": 1
                }
              },
              "style": {
                "background-color": ""
              }
            },
            {
              "add": "title",
              "text": "USA dominated the car market in the 1970s",
              "style": {
                "font-color": "darksalmon",
                "font-size": 28,
                "font-family": "Calibri",
                "font-style": "italic",
                "font-weight": "bold",
                "border-width": 0,
                "border-color": "brown",
                "position": "top-center",
                "background-image": "",
                "background-color": "",
                "divide-line-width": 5,
                "divide-line-color": "peachpuff",
                "top-padding": 0
              }
            },
            {
              "add": "caption",
              "text": "The circle size encodes the average weight of the cars",
              "style": {
                "font-color": "black",
                "font-family": "Calibri",
                "font-weight": "regular",
                "font-size": 18,
                "position": "top-center",
                "top-padding": 10
              }
            },
            {
              "add": "encoding",
              "channel": "x",
              "field": "Year"
            },
            {
              "add": "encoding",
              "channel": "size",
              "field": "Weight"
            },
            {
              "add": "annotation",
              "method": "desaturate",
              "target": []
            },
            {
              "add": "annotation",
              "method": "fill",
              "target": [
                {
                  "field": "Origin",
                  "value": "USA"
                }
              ],
              "style": {
                "color": "darksalmon"
              }
            },
            {
              "add": "annotation",
              "method": "texture",
              "target": [
                {
                  "field": "Origin",
                  "value": "USA"
                }
              ],
              "style": {
                "background-image": "https://narchart.github.io/editor/icon/car2.jpg"
              }
            }
          ]
        }
          
     ,
        
        
          {
            "data": {
              "url": "https://narchart.github.io/editor/spreadsheets/cars.csv",
              "schema": [
                {
                  "field": "Name",
                  "type": "categorical"
                },
                {
                  "field": "Miles per Gallon",
                  "type": "numerical"
                },
                {
                  "field": "Cylinders",
                  "type": "categorical"
                },
                {
                  "field": "Displacement",
                  "type": "numerical"
                },
                {
                  "field": "Horsepower",
                  "type": "numerical"
                },
                {
                  "field": "Weight",
                  "type": "numerical"
                },
                {
                  "field": "Acceleration",
                  "type": "numerical"
                },
                {
                  "field": "Year",
                  "type": "categorical"
                },
                {
                  "field": "Origin",
                  "type": "categorical"
                },
                {
                  "field": "dataid",
                  "type": "categorical"
                }
              ]
            },
            "actions": [
              {
                "add": "config",
                "mode": "light",
                "emotion": "",
                "background-image": ""
              },
              {
                "select": [
                  {
                    "field": "Name"
                  },
                  {
                    "field": "Miles per Gallon",
                    "aggregate": "average"
                  },
                  {
                    "field": "Cylinders"
                  },
                  {
                    "field": "Displacement",
                    "aggregate": "average"
                  },
                  {
                    "field": "Horsepower",
                    "aggregate": "average"
                  },
                  {
                    "field": "Weight",
                    "aggregate": "average"
                  },
                  {
                    "field": "Acceleration",
                    "aggregate": "sum"
                  },
                  {
                    "field": "Year"
                  },
                  {
                    "field": "Origin"
                  },
                  {
                    "field": "dataid"
                  }
                ],
                "groupby": [
                  {
                    "field": "dataid"
                  }
                ],
                "filter": []
              },
              {
                "add": "chart",
                "mark": {
                  "type": "unit",
                  "style": {
                    "stroke-color": "white",
                    "stroke-opacity": 1,
                    "stroke-width": 0.5,
                    "fill-opacity": 1
                  }
                },
                "style": {
                  "background-color": ""
                }
              },
              {
                "add": "title",
                "text": "USA dominated the car market in the 1970s",
                "style": {
                  "font-color": "black",
                  "font-size": 26,
                  "font-family": "Calibri",
                  "font-style": "italic",
                  "font-weight": "bold",
                  "border-width": 2,
                  "border-color": "royalblue",
                  "position": "top-center",
                  "background-image": "",
                  "background-color": "powderblue",
                  "divide-line-width": 0,
                  "divide-line-color": "peachpuff",
                  "top-padding": 0
                }
              },
              {
                "add": "caption",
                "text": "Color encodes origin. The circle size encodes the average weight of the cars",
                "style": {
                  "font-color": "black",
                  "font-family": "Calibri",
                  "font-weight": "regular",
                  "font-size": 18,
                  "position": "top-center",
                  "top-padding": 10
                }
              },
              {
                "add": "encoding",
                "channel": "x",
                "field": "Year"
              },
              {
                "add": "encoding",
                "channel": "size",
                "field": "Weight"
              },
              {
                "add": "encoding",
                "channel": "color",
                "field": "Origin"
              },
              {
                "add": "annotation",
                "method": "glow",
                "target": [
                  {
                    "field": "Origin",
                    "value": "USA"
                  }
                ]
              }
            ]
          }
          
        ];
        // 数据加密
        let compressResult = LZString.compressToBase64(JSON.stringify(data[result]));
        // 加密结果：N4IglgJiBcCMA0IB2BDAtgUxiQUqp5IgDZgDOALjANqiqbYogC+8N6W0IARky8m9gGMmAXUZA===
        // 数据解密
        // let decompressResult = JSON.parse(LZString.decompressFromBase64(compressResult));
        // console.log(compressResult);
        // e.clipboardData.setData("Text",compressResult)
        // alert("复制成功!")
        window.open("https://narchart.github.io/editor/#/url/"+compressResult )
            
    })
    
})(jQuery)
