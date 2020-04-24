import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class header extends Component {
  state = {};
  render() {
    return (
      <header className="headerNav">
        <div className="headerNav__mode">Moon</div>
        <div className="headerNav__wordmark">
          <Link to="/">
            J<span>.</span>Gaggino
          </Link>
        </div>
        <div className="headerNav__burger">J</div>
      </header>
    );
  }
}

export default header;
