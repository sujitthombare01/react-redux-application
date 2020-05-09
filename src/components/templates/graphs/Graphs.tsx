import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VegaLite } from 'react-vega'
interface graphProps {
  graphsPoint?: any,
  specs?: any,
  barData?: any,
  setGraphsPoint: any
}
interface graphState {
}

class Graphs extends Component<graphProps, graphState> {

  // constructor(props: graphProps) {
  //   super(props)
  //   this.props.setGraphsPoint();
  // }

  render() {
    return <div>
      {this.props.specs ? <VegaLite spec={this.props.specs} ></VegaLite> : ''}
    </div>;
  }
}
const mapStateToProps = (state: any) => ({ specs: state.template.graphs.spec, barData: state.template.graphs.barData })

const mapDispatchToProps = (dispatch: any) => ({
  setGraphsPoint: async () => {
    const spec = {
      "description": "A basic line chart example.",
      "width": 500,
      "height": 200,
      "padding": 5,

      "signals": [
        {
          "name": "interpolate",
          "value": "basis"
        }
      ],

      "data": [
        {
          "name": "table",
          "values": [
            { "x": 0, "y": 28, "c": 0 }, { "x": 0, "y": 20, "c": 1 },
            { "x": 1, "y": 43, "c": 0 }, { "x": 1, "y": 35, "c": 1 },
            { "x": 2, "y": 81, "c": 0 }, { "x": 2, "y": 10, "c": 1 },
            { "x": 3, "y": 19, "c": 0 }, { "x": 3, "y": 15, "c": 1 },
            { "x": 4, "y": 52, "c": 0 }, { "x": 4, "y": 48, "c": 1 },
            { "x": 5, "y": 24, "c": 0 }, { "x": 5, "y": 28, "c": 1 },
            { "x": 6, "y": 87, "c": 0 }, { "x": 6, "y": 66, "c": 1 },
            { "x": 7, "y": 17, "c": 0 }, { "x": 7, "y": 27, "c": 1 },
            { "x": 8, "y": 68, "c": 0 }, { "x": 8, "y": 16, "c": 1 },
            { "x": 9, "y": 49, "c": 0 }, { "x": 9, "y": 25, "c": 1 }
          ]
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


    const barData = {
      table: [
        { a: 'A', b: 28 },
        { a: 'B', b: 55 },
        { a: 'C', b: 43 },
        { a: 'D', b: 91 },
        { a: 'E', b: 81 },
        { a: 'F', b: 53 },
        { a: 'G', b: 19 },
        { a: 'H', b: 87 },
        { a: 'I', b: 52 },
      ],
    }
    const chartData = { spec, barData }
    dispatch({ type: 'SET_GRAPHS', payload: chartData })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Graphs)