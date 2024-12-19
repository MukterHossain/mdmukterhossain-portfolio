import React from 'react'
import './index.css'
import {  RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { router } from './Route/Routes.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  
);