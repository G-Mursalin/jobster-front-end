import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

export default router;
