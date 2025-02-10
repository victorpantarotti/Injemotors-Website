import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const PageModel = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PageModel;