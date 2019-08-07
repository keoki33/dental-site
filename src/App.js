import React, { Component } from "react";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";

import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <Router>
        <div className="main">
          <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]} render={props => <Home />} />
            <Route path="/about" render={props => <About />} />
            <Route path="/contact" render={props => <Contact />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
