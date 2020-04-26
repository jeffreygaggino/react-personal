import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModeSwitch from "../modeswitch/modeswitch";
import Burger from "../burger/burger";

class header extends Component {
  state = {
    open: false,
  };
  burgerToggle = () => {
    this.setState({ open: !this.state.open });
  };
  wordToggle = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <header className="headerNav">
        <ModeSwitch />
        <div onClick={this.wordToggle} className="headerNav__wordmark">
          <Link to="/">
            J<span className="punctuation">.</span>Gaggino
          </Link>
        </div>
        <Burger open={this.state.open} burgerToggle={this.burgerToggle} />
      </header>
    );
  }
}

export default header;
