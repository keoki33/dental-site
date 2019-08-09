import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <nav>
        <ul className="navLinks">
          <li>
            {" "}
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navBorder" />
      </nav>
    );
  }
}

export default Navbar;
