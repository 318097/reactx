import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ScrollComponent from "./components/ScrollComponent";
import Home from "./components/Home";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>
        <h2>
          React<span className="x">X</span>
        </h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/scroll">Scroll</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/scroll" component={ScrollComponent} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
