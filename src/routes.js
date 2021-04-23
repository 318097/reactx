import ScrollToTop from "./components/ScrollToTop";
import HideScrollbar from "./components/HideScrollbar";
import SpyScroll from "./components/SpyScroll";
import Mix from "./components/Mix";
import Home from "./components/Home";
import Dropdown from "./components/Dropdown";
import EventDelegation from "./components/EventDelegation";

const routes = [
  { route: "/spy-scroll", label: "Spy Scroll", component: SpyScroll },
  { route: "/scroll-to-top", label: "Scroll to Top", component: ScrollToTop },
  { route: "/mix", label: "Mix", component: Mix },
  {
    route: "/hide-scrollbar",
    label: "Hide Scrollbar",
    component: HideScrollbar,
  },
  {
    route: "/dropdown",
    label: "Dropdown",
    component: Dropdown,
  },
  {
    route: "/event-delegation",
    label: "Event Delegation",
    component: EventDelegation,
  },
  { route: "/", label: "Home", component: Home },
];

export { routes };
