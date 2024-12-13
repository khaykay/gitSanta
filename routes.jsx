import { createBrowserRouter } from "react-router-dom";
import BeginPage from "./src/Pages/BeginPage";
import ActionPage from "./src/Pages/ActionPage";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <BeginPage />,
  },
  {
    path: "/search",
    element: <ActionPage />,
  },
]);
export default router