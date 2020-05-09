import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AboutUs, Home, Graphs } from './templates'

export default class App extends Component {

  render() {
    return <div>
      <Router>
        <div>
          <h2>Welcome to React Router </h2>
          <nav>
            <ul>
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/graphs'} >Graphs</Link></li>
              <li><Link to={'/aboutus'} >About Us</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/graphs' component={Graphs} />
            <Route path='/aboutus' component={AboutUs} />
          </Switch>
        </div>
      </Router>

    </div>;
  }
}