import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import ModeSwitch from "../modeswitch/modeswitch";
import Burger from "../burger/burger";

class header extends Component {
  state = {};
  render() {
    return (
      <header className="headerNav">
        <ModeSwitch />
        <div className="headerNav__wordmark">
          <Link to="/">
            J<span className="punctuation">.</span>Gaggino
          </Link>
        </div>
        <Burger />
      </header>
    );
  }
}

export default header;
