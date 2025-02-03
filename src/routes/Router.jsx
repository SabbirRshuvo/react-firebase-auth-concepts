import { createBrowserRouter } from "react-router";
import Main from "../main/Main";
import Home from "../Layout/Home";
import About from "../Layout/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
