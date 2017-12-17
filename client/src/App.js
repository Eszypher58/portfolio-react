import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageContainer from "./containers/HomePageContainer";
import AboutMeContainer from './containers/AboutMeContainer';
//import NavContainer from './containers/NavContainer';
import './App.css';

class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/aboutme" component={AboutMeContainer} />
          </Switch>
        </Router>

    );
  }
}

export default App;
