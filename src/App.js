import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <Link to="/">
                  {" "}
                  <span className="mdl-layout-title">Lottry App</span>
                </Link>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                  <Link className="mdl-navigation__link" to="/">
                    Home
                  </Link>
                </nav>
              </div>
            </header>

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
