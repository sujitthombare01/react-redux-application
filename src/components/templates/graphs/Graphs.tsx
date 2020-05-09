import React , {Component} from 'react';
import {connect} from 'react-redux'
interface graphProps {
  graphsPoint?: any
  setGraphsPoint: any
}
interface graphState {
}

class Graphs extends Component<graphProps,graphState> {

    constructor(props:graphProps) {
      super(props)
      this.props.setGraphsPoint();
    }
    render() {
        return <h1> {this.props.graphsPoint} </h1>;
      }
}
const mapStateToProps =(state:any)=>({graphsPoint: state.template.graphs })

const mapDispatchToProps = (dispatch: any)=>({
  setGraphsPoint: ()=>{
    const chartName =  'Vega Charts'
    dispatch({type:'SET_GRAPHS', payload:chartName})
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Graphs)