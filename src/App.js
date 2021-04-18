import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Icon } from "@codedrops/react-ui";
import "./App.scss";
import { routes } from "./routes";

const App = (props) => {
  console.log(props);
  return (
    <div className="App" id="react-ui">
      <header>
        <Icon
          size={12}
          onClick={() => props.history.push("/")}
          type="arrow"
          direction="left"
        />
        <h4>React</h4>
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
