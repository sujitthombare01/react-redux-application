import data from './data'
const initState = {
  home: 'Home', aboutUs: 'About us', graphs: {
    spec: {
      "description": "A basic line chart example.",
      "width": 800,
      "height": 300,
      "padding": 10,

      "data":
      {
        "values": data
      }
      ,
      "mark": "line",
      "encoding": {
        "x": { "field": "date", "type": "temporal" },
        "y": { "field": "price", "type": "quantitative" },
        "color": { "field": "symbol", "type": "nominal" }
      },

      "selection": {
        "zoom_x": { "type": "interval", "bind": "scales", "encodings": ["x"] },
        "zoom_y1": { "type": "interval", "bind": "scales", "encodings": ["y"] }
      }

    }
  }
};

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