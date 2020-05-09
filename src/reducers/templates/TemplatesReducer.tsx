import data from './data'
const initState = { home: 'Home', aboutUs: 'About us', graphs: {
    spec: {
        "description": "A basic line chart example.",
        "width": 800,
        "height": 300,
        "padding": 10,
  
        "signals": [
          {
            "name": "interpolate",
            "value": "basis"
          }
        ],
  
        "data": [
          {
            "name": "table",
            "values": data
          }
        ],
  
        "scales": [
          {
            "name": "x",
            "type": "point",
            "range": "width",
            "domain": { "data": "table", "field": "x" }
          },
          {
            "name": "y",
            "type": "linear",
            "range": "height",
            "nice": true,
            "zero": true,
            "domain": { "data": "table", "field": "y" }
          },
          {
            "name": "color",
            "type": "ordinal",
            "range": "category",
            "domain": { "data": "table", "field": "c" }
          }
        ],
  
        "axes": [
          { "orient": "bottom", "scale": "x" },
          { "orient": "left", "scale": "y" }
        ],
  
        "marks": [
          {
            "type": "group",
            "from": {
              "facet": {
                "name": "series",
                "data": "table",
                "groupby": "c"
              }
            },
            "marks": [
              {
                "type": "line",
                "from": { "data": "series" },
                "encode": {
                  "enter": {
                    "x": { "scale": "x", "field": "x" },
                    "y": { "scale": "y", "field": "y" },
                    "stroke": { "scale": "color", "field": "c" },
                    "strokeWidth": { "value": 2 }
                  },
                  "update": {
                    "interpolate": { "signal": "interpolate" },
                    "strokeOpacity": { "value": 1 }
                  },
                  "hover": {
                    "strokeOpacity": { "value": 0.5 }
                  }
                }
              }
            ]
          }
        ]
      }
} };

const templatesReducer = (state = { ...initState }, action: any) => {
    switch (action.type) {
        case 'SET_HOME':
            return { ...state, home: action.payload }
        case 'SET_ABOUTUS':
            return { ...state, aboutUs: action.payload }
        case 'SET_GRAPHS':
            console.log(action.payload);
            
            return { ...state, graphs: action.payload }
        default:
            return state
    }
}

export default templatesReducer