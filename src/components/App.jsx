import React from 'react';
import Home from './Home.jsx';
import Houses from './Houses.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route path="/houses">
                <Houses />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
