import React, { Component } from "react";
import { Link } from "react-router-dom";

class Burger extends Component {
  render() {
    return (
      <div className="headerNav__burger">
        <div
          onClick={this.props.burgerToggle}
          className={`burger${this.props.open ? " open" : ""}`}
        >
          <div className="burger__line-1 burger__child"></div>
          <div className="burger__line-2 burger__child"></div>
          <div className="burger__group">
            <div className="burger__line-3 burger__child"></div>
            <div className="burger__line-4 burger__child"></div>
          </div>
          <div className="burger__line-5 burger__child"></div>
        </div>
        <div className={`burger-overlay${this.props.open ? " open" : ""}`}>
          <div className="burger-overlay__nav">
            <ul>
              <li className="burger-overlay__nav__li">
                <Link
                  onClick={this.props.burgerToggle}
                  to="/"
                  className="nav-item"
                >
                  Home
                </Link>
              </li>
              <li className="burger-overlay__nav__li">
                <Link
                  onClick={this.props.burgerToggle}
                  to="/about"
                  className="nav-item"
                >
                  Who Am I?
                </Link>
              </li>
              <li className="burger-overlay__nav__li">
                <Link
                  onClick={this.props.burgerToggle}
                  to="/skills"
                  className="nav-item"
                >
                  Expertise
                </Link>
              </li>
              <li className="burger-overlay__nav__li">
                <Link
                  onClick={this.props.burgerToggle}
                  to="/contact"
                  className="nav-item"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Burger;
