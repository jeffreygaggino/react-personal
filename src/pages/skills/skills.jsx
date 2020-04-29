import React, { Component } from "react";
import SkillInteractive from "../backgrounds/skillsinteractive/skillsinteractive";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div id="skills" className="content">
        <SkillInteractive />
        <div className="content__skills">
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
              You can visit my LinkedIn down below for more details or
              just&nbsp;
              <a
                href="mailto:jeffreygaggino@gmail.com"
                className="contact-color"
              >
                contact me
              </a>
              .
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
      </div>
    );
  }
}

export default Skills;
