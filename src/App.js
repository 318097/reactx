import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ScrollComponent from "./components/ScrollComponent";
import SpyScroll from "./components/SpyScroll";
import Home from "./components/Home";
import "./App.scss";

const links = [
  { link: "/", label: "Home" },
  { link: "/spy-scroll", label: "Spy Scroll" },
  { link: "/scroll", label: "Scroll" }
];

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>
        <h2>
          React<span className="x">X</span>
        </h2>
        <nav>
          {links.map(({ link, label }) => (
            <Link to={link}>{label}</Link>
          ))}
        </nav>
      </header>
      <Switch>
        <Route exact path="/scroll" component={ScrollComponent} />
        <Route exact path="/spy-scroll" component={SpyScroll} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
