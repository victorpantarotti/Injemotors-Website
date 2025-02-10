import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <h1>INJEMOTORS - Manutenção Automotiva</h1>
                <p>A melhor oficina mecânica do Itaim Paulista e região!</p>
                <a href="#contato">
                    Entre em contato
                </a>
            </div>
        </section>
    );
}

export default Banner;