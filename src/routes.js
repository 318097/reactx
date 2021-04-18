import ScrollComponent from "./components/ScrollComponent";
import SpyScroll from "./components/SpyScroll";
import ReactUI from "./components/ReactUI";
import Home from "./components/Home";

const routes = [
  { route: "/spy-scroll", label: "Spy Scroll", component: SpyScroll },
  { route: "/scroll", label: "Scroll", component: ScrollComponent },
  { route: "/react-ui", label: "React UI", component: ReactUI },
  { route: "/", label: "Home", component: Home }
];

export { routes };
