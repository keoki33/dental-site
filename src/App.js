import React, { Component } from "react";
import About from "./About";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <Router>
        <Switch>
          <div className="main">
            <Navbar />
            <h1>app</h1>
          </div>
          <Route path="/about" render={props => <About />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
