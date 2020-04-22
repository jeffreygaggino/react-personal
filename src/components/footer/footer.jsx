import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footerNav">
        <ul>
          <li>
            <a href="mailto:jeffreygaggino@gmail.com">Contact</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Expertise</Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default footer;
