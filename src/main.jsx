import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { router } from "./Route/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
