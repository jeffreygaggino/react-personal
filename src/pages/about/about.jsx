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
        <div className="about__blurb">
          <p>
            I am a third culture kid originating from a set of diverse cultures
            who has travelled all over.
          </p>
          <p>
            I attended Griffith University, graduating with a Bachelor’s in
            Creative and Interactive Media.
          </p>
          <p>
            I’ve created an interactive experience so you can find more about
            me.
          </p>
        </div>
        <div className="about__button code">
          <a
            href="http://interactive.jeffreygaggino.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="box-button codewords"
          >
            <span className="">MY STORY</span>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
