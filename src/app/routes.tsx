import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { TaskList } from "./components/TaskList";
import { Calendar } from "./components/Calendar";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Login },
      { path: "dashboard", Component: Dashboard },
      { path: "tasks", Component: TaskList },
      { path: "calendar", Component: Calendar },
      { path: "*", Component: NotFound },
    ],
  },
]);
