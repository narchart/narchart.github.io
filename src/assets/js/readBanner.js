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
                    "emotion": "",
                    "background-image": {"url":"https://narchart.github.io/editor/background/car_background3.jpg"},
                    "background-color":""
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
                    "background-image": {"url":"https://narchart.github.io/editor/background/car_background5.jpg"},
                    "background-color":""
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
                      "divide-line-color": "green",
                      "text": "Which car brand has the highest sales?"
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
              },{
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
                    "background-image": {"url":"https://narchart.github.io/editor/background/company_background.png"},
                    "background-color":""
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
                    "background-image": {"url":"https://narchart.github.io/editor/background/line_background3.png"},
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
                      
                    }
                  },
                  {
                    "add": "title",
                    "style": {
                      "text": "COVID-19",
                      "font-size": 45,
                      "font-color": "#FF7602",
                      "font-family": "Arial Black",
                      "font-style": "",
                      "font-weight": "bold",
                      "border-color": "",
                      "border-width": 0,
                      "position": "top-center",
                      "background-color": "",
                      "top-padding": 0
                    }
                  },
                  {
                    "add": "caption",
                    "style": {
                      "text": "The number of recovered cases reached its peak on March 15.",
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
                    "style": {
                      "text": "1362",
                      "tooltip-color": "#FF7602",
                      "font-color": "white",
                      "font-family": "Arial Black",
                      "font-size": 14
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
                    "emotion": "negative",
                    "background-image": {"url":"https://narchart.github.io/editor/background/line_background.png"},
                    "background-color":""
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
        ]

        let compressResult = LZString.compressToBase64(JSON.stringify(data[result-1]));
        window.open("https://narchart.github.io/editor/#/url/"+compressResult )

    })
    
})(jQuery)