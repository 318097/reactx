import ScrollComponent from "./components/ScrollComponent";
import SpyScroll from "./components/SpyScroll";
import ReactUI from "./components/ReactUI";
import Home from "./components/Home";
import Dropdown from "./components/Dropdown";

const routes = [
  { route: "/spy-scroll", label: "Spy Scroll", component: SpyScroll },
  { route: "/scroll", label: "Scroll", component: ScrollComponent },
  { route: "/react-ui", label: "React UI", component: ReactUI },
  {
    route: "/toggle-dropdown",
    label: "Close dropdown on outside click",
    component: Dropdown
  },
  { route: "/", label: "Home", component: Home }
];

export { routes };
