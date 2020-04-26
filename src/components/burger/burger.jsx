import React, { Component } from "react";
import { Link } from "react-router-dom";

class Burger extends Component {
  render() {
    return (
      <React.Fragment>
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
            <Link onClick={this.props.burgerToggle} to="/" className="nav-item">
              Home
            </Link>
            <Link
              onClick={this.props.burgerToggle}
              to="/about"
              className="nav-item"
            >
              Who Am I?
            </Link>
            <Link
              onClick={this.props.burgerToggle}
              to="/skills"
              className="nav-item"
            >
              Expertise
            </Link>
            <a
              onClick={this.burgerToggle}
              href="mailto:jeffreygaggino.com"
              className="nav-item"
            >
              Contact Me
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Burger;
