import React from "react";
import App from "./App";
// import { ReactDOM } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import { render } from "react-snapshot";
import { HelmetProvider } from "react-helmet-async";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.createRoot(document.getElementById('root')).render(
// )
