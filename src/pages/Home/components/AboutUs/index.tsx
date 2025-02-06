import styles from "./AboutUs.module.scss";

const AboutUs = () => {
    return (
        <section className={styles.aboutUs}>
            <h2>
                Qualidade e Tecnologia em Serviços Automotivos
            </h2>
            <p>
                Fundada em 1995, a INJEMOTORS oferece soluções automotivas com profissionais qualificados e equipamentos de ponta. Investimos constantemente em capacitação e parcerias com grandes empresas e entidades do setor. Nossos serviços incluem diagnóstico avançado, teste e limpeza de bicos injetores, análise de sistemas de gerenciamento, e muito mais.
            </p>
        </section>
    );
};

export default AboutUs;