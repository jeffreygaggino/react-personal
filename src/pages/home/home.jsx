import React, { Component } from "react";
import "./home.scss";
import Homearrow from "./homearrow";
import JeffreyInteractive from "../backgrounds/jeffreyinteractive/jeffreyinteractive";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="home">
        <JeffreyInteractive />
        <h1 className="home__title code">
          <span className="codewords">
            Hello<span className="punctuation">.</span>
          </span>
        </h1>
        <div className="home__blurb">
          <p>
            I'm <span className="about-color bold">Jeffrey</span>
            <span className="bold punctuation">,</span>
          </p>
          <p>
            a <span className="contact-color bold">Digital Developer</span>
            <span className="bold punctuation">.</span>
          </p>
        </div>
        <div className="home__subtitle">
          <Homearrow />
          Front End, Email & Design
        </div>
      </div>
    );
  }
}

export default Home;
