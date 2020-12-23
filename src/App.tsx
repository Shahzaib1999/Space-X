import React from "react";

import "./App.css";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <Switch>
          <div className="App">
          <img src={Logo} alt="logo" className="logo" />
            <Route exact path="/">
              <LaunchListContainer />
            </Route>
            <Route exact path="/launch/:id">
              <LaunchInfoContainer />
            </Route>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
