import React , {Component} from 'react';
import { connect } from 'react-redux'

interface homeProps {
  homePage?: any
}
interface homeState {
}
class Home extends Component<homeProps, homeState> {
   render() {
        return <h1> hello , {this.props.homePage} </h1>;
      }
}

export default connect((state:any)=>({ homePage : state.template.home }))(Home)