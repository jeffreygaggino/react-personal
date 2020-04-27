import React, { Component } from "react";
import Homearrow from "./homearrow";
import JeffreyInteractive from "../backgrounds/jeffreyinteractive/jeffreyinteractive";
import Typist from "react-typist";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="home" className="content">
        <JeffreyInteractive />
        <div className="content__home">
          <h1 className="home__title code">
            <Typist
              avgTypingDelay={150}
              cursor={{
                hideWhenDone: true,
                blink: true,
                hideWhenDoneDelay: 1000,
              }}
            >
              <Typist.Delay ms={1000} />
              <span className="codewords">
                Hello<span className="punctuation">.</span>
              </span>
            </Typist>
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
      </div>
    );
  }
}

export default Home;
