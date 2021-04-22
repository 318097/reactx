import ScrollToTop from "./components/ScrollToTop";
import SpyScroll from "./components/SpyScroll";
import Mix from "./components/Mix";
import Home from "./components/Home";
import Dropdown from "./components/Dropdown";

const routes = [
  { route: "/spy-scroll", label: "Spy Scroll", component: SpyScroll },
  { route: "/scroll-to-top", label: "Scroll to Top", component: ScrollToTop },
  { route: "/mix", label: "Mix", component: Mix },
  {
    route: "/dropdown",
    label: "Dropdown",
    component: Dropdown,
  },
  { route: "/", label: "Home", component: Home },
];

export { routes };
