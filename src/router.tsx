import { Route, Routes, Navigate } from "react-router-dom";

import PageModel from "./components/PageModel";
import Home from "./pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route element={<PageModel />}>
              <Route index element={<Home />} />
              
              <Route path="sobre" element={<Navigate to="/#sobre" />} />
              <Route path="servicos" element={<Navigate to="/#servicos" />} />
              <Route path="localizacao" element={<Navigate to="/#localizacao" />} />
              <Route path="contato" element={<Navigate to="/#contato" />} />
              
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default Router;
