import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import env from './env';

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

export default class App extends Component {
  apiKey = env.key;
  pageSize = 20;
   state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Switch>
        <Route exact path="/">
          <News setProgress = {this.setProgress} key = 'general' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'general'/>
          </Route>
          <Route exact path="/business">
          <News setProgress = {this.setProgress} key = 'business' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'business'/>
          </Route>
          <Route exact path="/technology">
          <News setProgress = {this.setProgress} key = 'technology' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'technology'/>
          </Route>
          <Route exact path="/sports">
          <News setProgress = {this.setProgress} key = 'sports' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'sports'/>
          </Route>
          <Route exact path="/general">
          <News setProgress = {this.setProgress} key = 'general' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'general'/>
          </Route>
          <Route exact path="/science">
          <News setProgress = {this.setProgress} key = 'science' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'science'/>
          </Route>
          <Route exact path="/health">
          <News setProgress = {this.setProgress} key = 'health' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'health'/>
          </Route>
          <Route exact path="/entertainment">
          <News setProgress = {this.setProgress} key = 'entertainment' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'entertainment'/>
          </Route>
          {/* <Route exact path="/technology">
          <News setProgress = {this.setProgress} key = 'technology' pageSize = {this.pageSize} apiKey = {this.apiKey}   country = 'in' category = 'technology'/>
          </Route> */}
        </Switch>
      </div>
      </Router>

    )
  }
}


// export default App;
