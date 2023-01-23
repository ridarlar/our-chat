import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import applicationRoutes from "./react-routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReduxProvider store={store}>
    <RouterProvider router={applicationRoutes} />
  </ReduxProvider>
);
reportWebVitals();
