import styled from "styled-components";
import BannerBG from "@/assets/Banner-BG.webp";
import BannerIMG1 from "@/assets/Banner-IMG1.webp";
import BannerCarros from "@/assets/Banner-Carros.webp";
import BannerIMG2 from "@/assets/Banner-IMG2.webp";

import styles from "./Banner.module.css";

const Container = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
`;

const Banner = () => {
    return (
        <section className={styles.banner} style={{ backgroundImage: `url(${BannerBG})` }}>
            <Container>
                <img src={BannerIMG1} alt="Texto do Banner" className={styles.corners} />
                <img src={BannerCarros} alt="Carros do Banner" className={styles.center} />
                <img src={BannerIMG2} alt="Simbolo do Banner" className={styles.corners} />
            </Container>
        </section>
    )
};

export default Banner;