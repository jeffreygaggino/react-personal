import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";

import "./styles/themes.scss";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <div id="layout">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
