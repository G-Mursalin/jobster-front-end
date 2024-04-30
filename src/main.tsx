// React
import React from "react";
import ReactDOM from "react-dom/client";
// React Router DOM
import { RouterProvider } from "react-router-dom";
// CSS
import "./index.css";
// Utils
import router from "./routes/routes.tsx";
// Redux Toolkit
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
