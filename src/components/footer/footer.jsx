import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footerNav">
        <ul>
          <li className="code">
            <span className="codewords">
              <a
                className="contact-color"
                activeClassName="isActive"
                href="mailto:jeffreygaggino@gmail.com"
              >
                Contact
              </a>
            </span>
          </li>
          <li className="code">
            <span className="codewords">
              <NavLink
                className="about-color"
                activeClassName="isActive"
                to="/about"
              >
                Who Am I?
              </NavLink>
            </span>
          </li>
          <li className="code">
            <span className="codewords">
              <NavLink
                className="skills-color"
                activeClassName="isActive"
                to="/skills"
              >
                Expertise
              </NavLink>
            </span>
          </li>
        </ul>
      </footer>
    );
  }
}

export default footer;
