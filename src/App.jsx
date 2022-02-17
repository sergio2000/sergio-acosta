import React from "react";
import Home from "./Home";
import About from "./About";
import Newsletter from "./newsletter";
import Dashboard from "./dashboard/Dashboard";

import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="App">
          <div className="navbar-container">
            <ul>
              <li>
                <Link id="home-link" className="links" to="/">
                  Sergio
                </Link>
              </li>
              <li>
                <Link id="about-link" className="links" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link id="dashboard-link" className="links" to="/dashboard">
                  Blog
                </Link>
              </li>
              <li>
                <Link id="contact-link" className="links" to="/contact">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/contact">
              <Newsletter />
            </Route>
          </Switch>
        </div>
      </nav>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

export default App;
