import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ScrollComponent from "./components/ScrollComponent";
import Home from "./components/Home";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/scroll" component={ScrollComponent} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Link to="/" className="home">
        Home
      </Link>
    </div>
  </BrowserRouter>
);

export default App;
