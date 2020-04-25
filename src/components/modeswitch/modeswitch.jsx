import React, { Component } from "react";

class modeswitch extends Component {
  state = {
    dark: true,
    transition: false,
  };
  renderMode = () => {
    let documentBody = document.body.classList;
    if (this.state.dark) {
      documentBody.remove("dark");
      documentBody.add("transition");
      documentBody.add("light");
    } else {
      documentBody.remove("light");
      documentBody.add("transition");
      documentBody.add("dark");
    }
    return this.setState({ dark: !this.state.dark });
  };
  switchMode = () => {};
  render() {
    return (
      <div onClick={this.renderMode} className="headerNav__mode">
        {this.state.dark ? "Dark" : "Light"}
      </div>
    );
  }
}

export default modeswitch;
