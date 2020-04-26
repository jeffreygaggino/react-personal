import React, { Component } from "react";
class modeswitch extends Component {
  state = {
    dark: true,
    transition: false,
  };
  getTheme = () => {
    let documentBody = document.body.classList;
    const theme = localStorage.getItem("theme");
    if (theme) {
      documentBody.add(theme);
      theme === "light" && this.setState({ dark: false });
    } else {
      documentBody.add("dark");
    }
  };
  componentDidMount() {
    this.getTheme();
  }
  renderMode = () => {
    let documentBody = document.body.classList;
    if (this.state.dark) {
      documentBody.remove("dark");
      documentBody.add("transition");
      documentBody.add("light");
      localStorage.setItem("theme", "light");
    } else {
      documentBody.remove("light");
      documentBody.add("transition");
      documentBody.add("dark");
      localStorage.setItem("theme", "dark");
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
