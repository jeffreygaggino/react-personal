import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

class footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footerNav">
        <ul>
          <li className="code contact-color">
            <span className="codewords">
              <a href="mailto:jeffreygaggino@gmail.com">Contact</a>
            </span>
          </li>
          <li className="code about-color">
            <span className="codewords">
              <Link to="/about">Who Am I?</Link>
            </span>
          </li>
          <li className="code skills-color">
            <span className="codewords">
              <Link to="/skills">Expertise</Link>
            </span>
          </li>
        </ul>
      </footer>
    );
  }
}

export default footer;
