import Header from "../Header";
import { Outlet } from "react-router-dom";

const PageModel = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default PageModel;