import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                href="mailto:jeffreygaggino@gmail.com"
              >
                Contact
              </a>
            </span>
          </li>
          <li className="code">
            <span className="codewords">
              <Link className="about-color" to="/about">
                Who Am I?
              </Link>
            </span>
          </li>
          <li className="code">
            <span className="codewords">
              <Link className="skills-color" to="/skills">
                Expertise
              </Link>
            </span>
          </li>
        </ul>
      </footer>
    );
  }
}

export default footer;
