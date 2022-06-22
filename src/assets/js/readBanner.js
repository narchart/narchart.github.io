(function($){
    $('.bannerImage img').click(function(e){
        let getValue = e.target.getAttribute("src")
        let result = getValue.replace(/[^0-9]/ig,"")
        let data = [
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
                    "background-image": {
                      "url": "https://narchart.github.io/editor/background/car_background3.jpg"
                    }
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
                    "text": "Technical Specs of Cars in the 1980s",
                    "style": {
                      "position": "left",
                      "font-family": "Gil Sans",
                      "font-weight": "bold",
                      "font-size": 30,
                      "font-color": "#15777C",
                      "font-style": "italic",
                      "border-width": 2,
                      "border-color": "#15777C"
                    },
                    "animation": {
                      "type": "wipe",
                      "duration": 1000
                    }
                  },
                  {
                    "add": "caption",
                    "text": "Pontiac grand prix is the car that had the highest horsepower in the 1980s. Size encodes acceleration.",
                    "style": {
                      "font-family": "Gil Sans",
                      "font-size": 16,
                      "font-weight": "regular",
                      "font-color": "#364A45",
                      "position": "left",
                      "top-padding": 0
                    },
                    "animation": {
                      "duration": 1000
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
                    ],
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "encoding",
                    "channel": "size",
                    "field": "Acceleration",
                    "animation": {
                      "duration": 1000
                    }
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
                    },
                    "animation": {
                      "type": "wipe",
                      "duration": 1000
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
                      "tooltip-color": "#00797D",
                      "text": "Car name: pontiac grand prix"
                    },
                    "animation": {
                      "type": "wipe",
                      "duration": 1000
                    }
                  }
                ]
              },
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
                    "emotion": "playful",
                    "background-image": {
                      "url": "https://narchart.github.io/editor/background/car_background4.jpg"
                    }
                  },
                  {
                    "select": [
                      {
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
                        "stroke-color": "#90A290",
                        "stroke-width": 1
                      }
                    },
                    "style": {}
                  },
                  {
                    "add": "title",
                    "text": "Cars in the 1980s: Weight vs Horsepower",
                    "style": {
                      "position": "left",
                      "font-family": "Gil Sans",
                      "font-weight": "bold",
                      "font-size": 24,
                      "font-color": "white",
                      "font-style": "italic",
                      "background-color": "#FE268E"
                    },
                    "animation": {
                      "type": "wipe",
                      "duration": 1000
                    }
                  },
                  {
                    "add": "caption",
                    "text": "Buick estate wagon (sw) is a special car that has a high horsepower while being lightweight. Color encodes the origin of the cars.",
                    "style": {
                      "font-family": "Gil Sans",
                      "font-size": 16,
                      "font-style": "italic",
                      "font-weight": "regular",
                      "font-color": "#364A45",
                      "position": "left"
                    },
                    "animation": {
                      "type": "wipe",
                      "duration": 1000
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
                    ],
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "encoding",
                    "channel": "color",
                    "field": "Origin",
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "annotation",
                    "method": "arrow",
                    "target": [
                      {
                        "field": "Weight",
                        "value": 3086
                      }
                    ],
                    "style": {
                      "color": "#F9CF00"
                    },
                    "animation": {
                      "type": "fly",
                      "duration": 1000
                    }
                  },
                  {
                    "add": "annotation",
                    "method": "reference",
                    "target": [
                      {
                        "field": "Weight",
                        "value": 3086
                      }
                    ],
                    "style": {
                      "color": "black"
                    },
                    "animation": {
                      "type": "wipe",
                      "duration": 1000
                    }
                  },
                  {
                    "add": "annotation",
                    "method": "tooltip",
                    "target": [
                      {
                        "field": "Weight",
                        "value": 3086
                      }
                    ],
                    "text": "Car name: buick estate wagon(sw)(1970)",
                    "style": {
                      "font-size": 11,
                      "font-weight": "bold",
                      "font-color": "white",
                      "tooltip-color": "#FE268E",
                      "text": "Car name: buick estate wagon(sw)(1970)"
                    },
                    "animation": {
                      "duration": 1000
                    }
                  }
                ]
              },
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
                    },
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "caption",
                    "text": "Do you know which 3 car brands are the most popular? Here is the data about global car sales by key brands, from 2007 to 2011",
                    "style": {
                      "font-family": "Comic Sans MS",
                      "font-size": 17,
                      "font-weight": "bold",
                      "font-color": "black",
                      "position": "top-center"
                    },
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "encoding",
                    "channel": "theta",
                    "field": "Sales",
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "encoding",
                    "channel": "color",
                    "field": "Brand",
                    "animation": {
                      "duration": 1000
                    }
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
                    },
                    "animation": {
                      "duration": 1000
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
                    },
                    "animation": {
                      "duration": 1000
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
                    },
                    "animation": {
                      "duration": 1000
                    }
                  }
                ]
              },
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
                    "emotion": "positive",
                    "background-image": {
                      "url": "https://narchart.github.io/editor/background/car_background4.jpg",
                      "opacity": 0.65
                    }
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
                        "outer-radius": 220,
                        "text-radius": 240,
                        "corner-radius": 50,
                        "stroke": "white",
                        "stroke-width": 2,
                        "stroke-opacity": 0.5,
                        "fill-opacity": 0.8
                      }
                    },
                    "style": {}
                  },
                  {
                    "add": "title",
                    "text": "Global car sales by key brands, 2007-2011",
                    "style": {
                      "position": "center",
                      "font-family": "Times",
                      "font-weight": "bold",
                      "font-color": "black",
                      "font-size": 34,
                      "font-style": "italic",
                      "background-color": "white"
                    },
                    "animation": {
                      "duration": 1000
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
                    },
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "encoding",
                    "channel": "theta",
                    "field": "Sales",
                    "animation": {
                      "duration": 1000
                    }
                  },
                  {
                    "add": "encoding",
                    "channel": "color",
                    "field": "Brand",
                    "animation": {
                      "duration": 1000
                    }
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
                    },
                    "animation": {
                      "duration": 1000
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
                      "font-color": "black",
                      "font-weight": "bold",
                      "font-size": 20
                    },
                    "animation": {
                      "duration": 1000
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
                      "color": "black"
                    },
                    "animation": {
                      "duration": 1000
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
                      "font-color": "black",
                      "font-weight": "bold",
                      "font-size": 20
                    },
                    "animation": {
                      "duration": 1000
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
                      "color": "black"
                    },
                    "animation": {
                      "duration": 1000
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
                      "font-color": "black",
                      "font-weight": "bold",
                      "font-size": 20
                    },
                    "animation": {
                      "duration": 1000
                    }
                  }
                ]
              },
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
                  "background-image": {
                    "url": "https://narchart.github.io/editor/background/car_background11.jpg",
                    "opacity":0.4
                  }
                },
                  {
                      "select": [{
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
                      "groupby": [{
                          "field": "dataid"
                      }],
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
                      "text": "Who produced the lightest cars in the 1980s?",
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
                      },
                      "animation": {
                        "type": "wipe",
                        "duration": 1000
                      }
                  },
                  {
                      "add": "caption",
                      "text": "Japan produced the lightest cars. Data source: 1983 American Statistical Association Exposition.",
                      "style": {
                          "font-color": "black",
                          "font-family": "Calibri",
                          "font-weight": "regular",
                          "font-size": 18,
                          "position": "top-left",
                          "top-padding": 20
                      },
                      "animation": {
                        "type": "typewritter",
                        "duration": 2000
                      }
                  },
                  {
                      "add": "encoding",
                      "channel": "x",
                      "field": "Origin",
                      "animation": {
                        "duration": 1000
                      }
                  },
                  {
                      "add": "encoding",
                      "channel": "y",
                      "field": "Year",
                      "animation": {
                        "duration": 1000
                      }
                  },
                  {
                      "add": "encoding",
                      "channel": "size",
                      "field": "Weight",
                      "animation": {
                        "duration": 1000
                      }
                  },
                  {
                      "add": "annotation",
                      "method": "desaturate",
                      "target": [],
                      "animation": {
                          "duration": 1000
                      }
                  },
                  {
                      "add": "annotation",
                      "method": "fill",
                      "target": [{
                          "field": "Origin",
                          "value": "Japan"
                      }],
                      "style": {
                          "color": "darksalmon"
                      },
                      "animation": {
                          "duration": 1000
                      }
                  }
              ]
          },
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
              "actions": [{
                      "add": "config",
                      "mode": "light",
                      "background-image": {
                          "url": "https://narchart.github.io/editor/background/car_background4.jpg",
                          "opacity": 0.3
                      }
                  },
                  {
                      "select": [{
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
                      "groupby": [{
                          "field": "dataid"
                      }],
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
                          "background-color": { "color": "#F2F2F2", "opacity": 0.2 }
                      }
                  },
                  {
                      "add": "title",
                      "text": "Who Produced the Most Cars in the 1980s?",
                      "style": {
                          "font-size": 32,
                          "font-family": "Times",
                          "font-style": "italic",
                          "font-weight": "bold",
                          "border-width": 3,
                          "position": "top-center",
                          "top-padding": 10
                      },
                      "animation": {
                          "duration": 1000
                      }
                  },
                  {
                      "add": "caption",
                      "text": "USA produced the most cars in the 1980s. Data source: 1983 American Statistical Association Exposition.",
                      "style": {
                          "font-color": "black",
                          "font-family": "Times",
                          "font-weight": "bold",
                          "font-size": 16,
                          "position": "top-center",
                          "top-padding": 10
                      },
                      "animation": {
                          "duration": 1000
                      }
                  },
                  {
                      "add": "encoding",
                      "channel": "x",
                      "field": "Origin",
                      "animation": {
                        "duration": 1000
                      }
                  }
              ]
          },
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
                "background-color": {
                  "color": "white"
                }
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
                "text": "COVID-19: Confirmed Cases",
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
                },
                "animation": {
                  "duration": 1000
                }
              },
              {
                "add": "caption",
                "text": "During March 2020, the number of confirmed cases reached its peak on March 19. Data source: WHO.",
                "style": {
                  "font-color": "black",
                  "font-family": "Georgia",
                  "font-weight": "bold",
                  "font-size": 15,
                  "position": "top-center",
                  "top-padding": 15
                },
                "animation": {
                  "duration": 1000
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
                ],
                "animation": {
                  "duration": 1000
                }
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
                "style": {},
                "animation": {
                  "duration": 1000
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
                },
                "animation": {
                  "duration": 1000
                }
              }
            ]
          },
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
                  "background-image": {
                    "url": "https://narchart.github.io/editor/background/line_chart_background2.png"
                  }
                }
              },
              {
                "add": "title",
                "text": "Recovered Cases of COVID-19",
                "style": {
                  "font-size": 35,
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
                },
                "animation": {
                    "duration": 1500
                  }
              },
              {
                "add": "caption",
                "text": "During March 2020, the number of recovered cases reached its peak on March 15. Data source: WHO.",
                "style": {
                  "font-color": "black",
                  "font-family": "Arial",
                  "font-style": "",
                  "font-weight": "bold",
                  "font-size": 16,
                  "position": "top-center",
                  "top-padding": 10
                },
                "animation": {
                    "duration": 1500
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
                ],
                "animation": {
                  "duration": 1500
                }
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
                  "font-size": 14,
                  "text": "1362"
                },
                "animation": {
                  "type": "wipe",
                  "duration": 600
                }
              }
            ]
          },
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
                      "mode": "light",
                      "emotion": "negative",
                      "background-image": { "url": "https://narchart.github.io/editor/background/line_background.png" }
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
                          "font-size": 32,
                          "font-color": "white",
                          "font-family": "Times New Roman",
                          "font-style": "",
                          "font-weight": "bold",
                          "border-width": 0,
                          "position": "top-left",
                          "background-color": "#3C3C3C",
                          "top-padding": 0
                      },
                      "animation": {
                        "type": "typewritter",
                        "duration": 1500
                      }
                  },
                  {
                      "add": "caption",
                      "text": "During March 2020, the number of confirmed cases reached its peak on March 19. Data source: WHO.",
                      "style": {
                          "font-color": "black",
                          "font-family": "Times New Roman",
                          "font-weight": "bold",
                          "font-size": 18,
                          "position": "top-left"
                      },
                      "animation": {
                        "type": "typewritter",
                        "duration": 1500
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
                      ],
                      "animation": {
                       "duration": 1000
                      }
                  },
                  {
                      "add": "annotation",
                      "method": "fill",
                      "target": [{
                          "field": "Date",
                          "value": "2020/3/19"
                      }],
                      "style": {},
                      "animation": {
                          "duration": 1000
                      }
                  },
                  {
                      "add": "annotation",
                      "method": "reference",
                      "target": [{
                          "field": "Date",
                          "value": "2020/3/19"
                      }],
                      "style": {},
                      "animation": {
                          "duration": 1000
                      }
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
                "text": "Dead Startups in China",
                "style": {
                  "font-color": "black",
                  "font-size": 30,
                  "font-family": "Georgia",
                  "font-style": "italic",
                  "font-weight": "bold",
                  "border-width": 3,
                  "border-color": "#C09F02",
                  "position": "top-center"
                },
                "animation": {
                  "duration": 1000
                }
              },
              {
                "add": "caption",
                "text": "We collected data from itjuzi.com and analyzed the startups in China died between 2010 and 2019. Companies from the new industry have the longest mean survival time.",
                "style": {
                  "font-color": "#C09F02",
                  "font-weight": "bold",
                  "font-size": 14,
                  "position": "top-left"
                },
                "animation": {
                  "duration": 1000
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
                ],
                "animation": {
                  "duration": 1000
                }
              },
              {
                "add": "annotation",
                "method": "desaturate",
                "target": [],
                "animation": {
                  "duration": 1000
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
                ],
                "style": {
                  "color": "#F9CF00"
                },
                "animation": {
                  "duration": 1000
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
                ],
                "animation": {
                  "duration": 1000
                }
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
                "mode": "light",
                "emotion": "trustworthy",
                "background-image": {
                  "url": "https://narchart.github.io/editor/background/company_background.png",
                  "opacity": 0.3
                }
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
                "text": "Fun facts about dead startups in China!",
                "style": {
                  "font-color": "white",
                  "font-size": 28,
                  "font-family": "Georgia",
                  "font-style": "italic",
                  "background-color": "#79AF00",
                  "position": "top-left",
                },
                "animation": {
                    "duration": 1000
                }
              },
             {
                "add": "caption",
                "text": "We collected data from itjuzi.com and analyzed the startups in China died between 2010 and 2019. Companies that go public have the longest mean survival time.",
                "style": {
                  "font-color": "black",
                  "font-size": 15,
                  "position": "top-left",
                },
                "animation": {
                    "duration": 1000
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
                ],
                "animation": {
                    "duration": 1000
                  }
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
                "animation": {
                    "duration": 1000
                }
              }
            ]
          },
          {
            "data":{
              "url":"https://narchart.github.io/editor/spreadsheets/sales.csv",
              "schema":[
                {
                  "field":"Year",
                  "type":"temporal"
                },
                {
                  "field":"Brand",
                  "type":"categorical"
                },
                {
                  "field":"Category",
                  "type":"categorical"
                },
                {
                  "field":"Sales",
                  "type":"numerical"
                }
              ]
            },
            "actions":[
              {
                "add":"config",
                "mode":"light",
                "emotion":"negative",
                "background-image":{
                  "url":"https://narchart.github.io/editor/background/car_background10.jpg",
                  "opacity":0.3
                }
              },
              {
                "select":[
                  {
                    "field":"Sales",
                    "aggregate":"count"
                  },
                  {
                    "field":"Brand"
                  }
                ],
                "groupby":[
                  {
                    "field":"Brand"
                  }
                ],
                "filter":[]
              },
              {
                "add":"chart",
                "mark":{
                  "type":"arc",
                  "style":{
                    "inner-radius":150,
                    "outer-radius":200,
                    "text-radius":210,
                    "corner-radius":5,
                    "stroke":"blue",
                    "stroke-width":2,
                    "stroke-opacity":0,
                    "fill":"white",
                    "fill-opacity":0.6
                  }
                },
                "style":{}
              },
              {
                "add":"title",
                "text":"Global car sales by key brands, 2007-2011",
                "style":{
                  "position":"top-left",
                  "font-family":"Calibri",
                  "font-weight":"bold",
                  "font-color":"white",
                  "font-size":25,
                  "font-style":"italic",
                  "border-width":2,
                  "border-color":"orange",
                  "background-color":"#151D67",
                },
                "animation": {
                    "duration": 1000
                }
              },
              {
                "add":"caption",
                "text":"Ford has the highest proportion of sales among all the brands.",
                "style":{
                  "font-family":"Calibri",
                  "font-size":20,
                  "font-weight":"bold",
                  "font-color":"black",
                  "position":"top-left",
                },
                "animation": {
                    "duration": 1000
                }
              },
              {
                "add":"encoding",
                "channel":"theta",
                "field":"Sales",
                "animation": {
                    "duration": 1000
                  }
              },
              {
                "add":"annotation",
                "method":"label",
                "target":[],
                "style":{
                  "font-size":16,
                  "font-color":"#151D67",
                  "font-weight":800
                },
                "animation": {
                    "duration": 1000
                  }
              },
              {
                "add":"annotation",
                "method":"fill",
                "target":[
                  {
                    "field":"Brand",
                    "value":"Ford"
                  }
                ],
                "style":{
                  "color":"#151D67"
                },
                "animation": {
                    "duration": 1000
                }
              }
            ]
          }
          ]
          

        let compressResult = LZString.compressToBase64(JSON.stringify(data[result-1]));
        window.open("https://narchart.github.io/editor/#/url/"+compressResult )

    })
    
})(jQuery)