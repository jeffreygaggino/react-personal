import React, { Component } from "react";
import "./home.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="home">
        <div className="jeffrey-backgroundImage-dark"></div>
        <div className="jeffrey-backgroundImage-light"></div>
        <h1 className="home-title code">
          <span className="codewords">
            Hello<span className="punctuation">.</span>
          </span>
        </h1>
        <div className="home-blurb">
          <p>
            I'm <span className="about-color bold">Jeffrey</span>
            <span className="bold punctuation">,</span>
          </p>
          <p>
            a <span className="contact-color bold">Digital Developer</span>
            <span className="bold punctuation">.</span>
          </p>
        </div>
        <div className="home-subtitle">
          <svg
            className="home-subtitle__svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              d="M1 0V15H15"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M18 15L13.5 17.5981L13.5 12.4019L18 15Z"
              fill="currentColor"
            />
          </svg>
          Front End, Email & Design
        </div>
      </div>
    );
  }
}

export default Home;
