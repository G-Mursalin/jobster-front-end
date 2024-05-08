import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import Landing from "../pages/Landing";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

export default router;
