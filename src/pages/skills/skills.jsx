import React, { Component } from "react";
import "./skills.scss";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div id="skills">
        <div className="skills-backgroundImage-dark"></div>
        <div className="skills-backgroundImage-light"></div>
        <h1 className="title code">
          <span className="codewords">
            Skills & <br /> Expertise
          </span>
        </h1>
        <div className="skills__blurb">
          <p>
            I primarily use day to day in my development HTML, CSS, JS with
            supporting frameworks of React and Vue.
          </p>
          <p>
            You can visit my LinkedIn down below for more details or just
            contact me.
          </p>
        </div>
        <div className="skills__button code">
          <a
            href="https://www.linkedin.com/in/jeffreygaggino/"
            target="_blank"
            rel="noopener noreferrer"
            className="box-button codewords"
          >
            <span className="">LINKEDIN</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Skills;
