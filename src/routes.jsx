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

// export default function Routes() {
//   return (
//     <Router>
//       <Route exact path="/" element={Index} errorElement={ErrorPage} />
//       <Route path="/about" element={About} />
//       <Route
//         path="/logement/:_id"
//         element={Logement}
//         errorElement={ErrorPage}
//       />
//     </Router>
//   );
// }
