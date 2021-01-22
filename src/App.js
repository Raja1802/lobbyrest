import React, { Component, Suspense } from "react";

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lazy } from "react";
import Routes from "./components/Routes";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Lottry App</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                  {/* <a className="mdl-navigation__link" href="">
                  Link
                </a> */}
                </nav>
              </div>
            </header>
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Lottry APP</span>
              <nav className="mdl-navigation">
                {/* <a className="mdl-navigation__link" href="">
                Link
              </a> */}
              </nav>
            </div>
            <main className="mdl-layout__content">
              <div className="page-content">
                <Suspense fallback={<div></div>}>
                  <Routes />
                </Suspense>
              </div>
            </main>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
