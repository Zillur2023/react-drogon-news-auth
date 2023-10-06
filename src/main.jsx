import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import myCreateRoute from "./Routers/Route";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreateRoute} />
    </AuthProvider>
  </React.StrictMode>
);
