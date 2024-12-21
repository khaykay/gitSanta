import { createBrowserRouter } from "react-router-dom";
import BeginPage from "./src/Pages/BeginPage";
import ActionPage from "./src/Pages/ActionPage";
import Loader from "./src/component/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BeginPage />,
  },
  {
    path: "/search",
    element: <ActionPage />,
  },
  {
    path: "/loader",
    element: <Loader />,
  },
]);
export default router;
