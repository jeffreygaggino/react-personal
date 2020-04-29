import React, { Component } from "react";
import Homearrow from "./homearrow";
import JeffreyInteractive from "../backgrounds/jeffreyinteractive/jeffreyinteractive";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};

  render() {
    return (
      <div id="home" className="content">
        <JeffreyInteractive />
        <div className="content__home">
          <h1 className="home__title code">
            <span className="codewords">
              Hello<span className="punctuation">.</span>
            </span>
          </h1>
          <div className="home__blurb">
            <p>
              I'm{" "}
              <Link to="/about" className="about-color bold">
                Jeffrey
              </Link>
              <span className="bold punctuation">,</span>
            </p>
            <p>
              a{" "}
              <a
                href="mailto:jeffreygaggino@gmail.com"
                className="contact-color bold"
              >
                Digital Developer
              </a>
              <span className="bold punctuation">.</span>
            </p>
          </div>
          <div className="home__subtitle">
            <Homearrow />
            <Link to="/skills">Design, Front-End & Email</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
