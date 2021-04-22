import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Home = () => (
  <section id="home">
    <nav>
      {routes
        .filter((item) => item.route !== "/")
        .map(({ route, label }) => (
          <Link key={label} to={route}>
            {label}
          </Link>
        ))}
    </nav>
  </section>
);

export default Home;
