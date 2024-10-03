import { createBrowserRouter } from "react-router-dom";
import PageModel from "./components/PageModel";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageModel page={<Home />} />,
  },
]);

export default router;
