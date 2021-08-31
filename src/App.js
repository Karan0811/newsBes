import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/business">
          <News key = 'business' pageSize = {10} category = 'business'/>
          </Route>
          <Route exact path="/technology">
          <News key = 'technology' pageSize = {10} category = 'technology'/>
          </Route>
          <Route exact path="/sports">
          <News key = 'sports' pageSize = {10} category = 'sports'/>
          </Route>
          <Route exact path="/general">
          <News key = 'general' pageSize = {10} category = 'general'/>
          </Route>
          <Route exact path="/science">
          <News key = 'science' pageSize = {10} category = 'science'/>
          </Route>
          <Route exact path="/health">
          <News key = 'health' pageSize = {10} category = 'health'/>
          </Route>
          <Route exact path="/entertainment">
          <News key = 'entertainment' pageSize = {10} category = 'entertainment'/>
          </Route>
          {/* <Route exact path="/technology">
          <News key = 'technology' pageSize = {10} category = 'technology'/>
          </Route> */}
        </Switch>
      </div>
      </Router>

    )
  }
}


// export default App;
