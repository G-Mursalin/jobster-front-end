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
import { store, persistor } from "./redux/store.ts";
// React Tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Redux Persist
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <ToastContainer position="top-center" />
    </Provider>
  </React.StrictMode>
);
