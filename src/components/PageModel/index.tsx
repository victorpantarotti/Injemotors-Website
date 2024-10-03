import { ReactElement } from "react"
import Header from "../Header";

interface PageModelProps {
    page: ReactElement
};

const PageModel = ({ page }: PageModelProps) => {
    return (
        <>
            <Header />
            {page}
        </>
    );
};

export default PageModel;