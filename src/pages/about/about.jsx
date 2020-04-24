import React, { Component } from "react";
import "./about.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <div className="jeffrey-backgroundImage-dark"></div>
        <div className="jeffrey-backgroundImage-light"></div>
        <h1 className="title code">
          <span className="codewords">Who Am I?</span>
        </h1>
      </div>
    );
  }
}

export default About;
