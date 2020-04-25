import React, { Component } from "react";
import "./burger.scss";

class Burger extends Component {
  state = {
    open: false,
  };
  burgerToggle = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.burgerToggle}
          className={`burger${this.state.open ? " open" : ""}`}
        >
          <div className="burger__line-1 burger__child"></div>
          <div className="burger__line-2 burger__child"></div>
          <div className="burger__group">
            <div className="burger__line-3 burger__child"></div>
            <div className="burger__line-4 burger__child"></div>
          </div>
          <div className="burger__line-5 burger__child"></div>
        </div>
        <div
          className={`burger-overlay${this.state.open ? " open" : ""}`}
        ></div>
      </React.Fragment>
    );
  }
}

export default Burger;
