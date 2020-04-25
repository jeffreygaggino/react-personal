import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="layout">
          <Header />
          <div id="mainContent">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
