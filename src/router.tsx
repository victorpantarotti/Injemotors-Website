import { Route, Routes } from "react-router-dom";

import PageModel from "./components/PageModel";
import Home from "./pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route element={<PageModel />}>
              <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default Router;
