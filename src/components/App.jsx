import React from 'react';
import Home from './Home.jsx';
import Houses from './Houses.jsx';
import {connect} from 'react-redux';
import {HOME_ROUTE} from '../redux/actionTypes.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidUpdate(t) {
    // To chyba tak nie powinno być, ale... jak zmienia się stan `route` w reduxie zmień po prostu url
    if (this.myRef.current) {
      if (this.props.reduxState.route === HOME_ROUTE) {
        this.myRef.current.history.push('/');
      } else { // HOUSE_ROUTE
        this.myRef.current.history.push('/houses');
      }
    }
  }
  render() {
    return (
      <div className="app">
        <Router ref={this.myRef}>
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

export default connect(
  (state) => ({reduxState: state}),
  {},
)(App);
