import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Address from "./components/Address";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <>
            <Banner />
            <AboutUs />
            <Services />
            <Address />
            <Contact />
        </>
    );
}