import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageContainer from "./containers/HomePageContainer";
import AboutMeContainer from './containers/AboutMeContainer';
import WhatIDoContainer from './containers/WhatIDoContainer';
import ProcessContainer from './containers/ProcessContainer';
import MyWorkContainer from './containers/MyWorkContainer';
import ContactContainer from './containers/ContactContainer';
import './App.css';

class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/aboutme" component={AboutMeContainer} />
          <Route exact path="/whatido" component={WhatIDoContainer} />
          <Route exact path="/process" component={ProcessContainer} />
          <Route exact path="/mywork" component={MyWorkContainer} />
          <Route exact path="/connect" component={ContactContainer} />
          </Switch>
        </Router>

    );
  }
}

export default App;
