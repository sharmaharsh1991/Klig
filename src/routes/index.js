import Workflow from "../pages/Workflow";
import Dashboard from "../pages/Dashboard";


const mainRoutes = [
  {
    path: "/",
    element: <Workflow />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

];

export default mainRoutes;
