import React from "react";
import Index from "./pages/index";
import ErrorPage from "./pages/error-page";
import About from "./pages/about";
import Logement from "./pages/logement";
import { createBrowserRouter } from "react-router-dom";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "logement/:_id",
    element: <Logement />,
    errorElement: <ErrorPage />,
  },
]);
export default routing;
