import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { LocationDetails } from "./components/LocationDetails";
import { Explore } from "./components/Explore";
import { Alerts } from "./components/Alerts";
import { Settings } from "./components/Settings";
import { SafeRoutes } from "./components/SafeRoutes";
import { Tickets } from "./components/Tickets";
import { Report } from "./components/Report";
import { Community } from "./components/Community";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "location/:id", Component: LocationDetails },
      { path: "explore", Component: Explore },
      { path: "alerts", Component: Alerts },
      { path: "safe-routes", Component: SafeRoutes },
      { path: "tickets", Component: Tickets },
      { path: "report", Component: Report },
      { path: "community", Component: Community },
      { path: "settings", Component: Settings },
    ],
  },
]);