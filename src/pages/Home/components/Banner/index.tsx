import IMG1 from "@/assets/Banner-IMG1.webp";
import IMG2 from "@/assets/Banner-IMG2.webp";
import cars from "@/assets/Banner-Carros.webp";

import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <img className={styles.boxImg} src={IMG1} alt="Manutenção para veículos nacionais e importados!" />
            <img className={styles.carsImg} src={cars} alt="Foto de carros" />
            <img className={styles.boxImg} src={IMG2} alt="Símbolos de manutenção" />
        </section>
    );
}

export default Banner;