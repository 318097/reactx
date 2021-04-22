import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Icon } from "@codedrops/react-ui";
import "./App.scss";
import { routes } from "./routes";

const App = (props) => {
  const isHomePage = props.location.pathname === "/";
  return (
    <div className="app" id="react-ui">
      <header onClick={() => props.history.push("/")}>
        {isHomePage ? (
          <Icon size={12} type="triangle" />
        ) : (
          <Icon size={12} type="arrow" direction="left" />
        )}
        <h4>
          React<span>X</span>
        </h4>
      </header>
      <Switch>
        {routes.map(({ route, component, label }) => (
          <Route key={label} exact path={route} component={component} />
        ))}
      </Switch>
    </div>
  );
};

export default withRouter(App);
