import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";

function Main({ location }) {
  return (
    <TransitionGroup id="mainContent">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 1250, exit: 750 }}
        classNames={"fade"}
        appear
      >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Home} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Main);
