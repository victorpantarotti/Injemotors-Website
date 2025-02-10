import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./Address.module.scss";

const Address = () => {
    return (
        <section className={styles.address} id="localizacao">
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Nossa localização</h2>
                <div className={styles.container}>
                    <iframe className={styles.mapEmbed} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9067481048232!2d-46.40478919999999!3d-23.4998681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63839b7a69b9%3A0xaf7640baf16e2038!2sINJEMOTORS%20-%20Manuten%C3%A7%C3%A3o%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1738953195686!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className={styles.infos}>
                        <h2 className={styles.infos__title}>INJEMOTORS - Manutenção Automotiva</h2>
                        <p className={styles.infos__address}>Rua Ilha de São Francisco, 311 - Vila Silva Teles, São Paulo - SP, 08110-310</p>
                        <p className={styles.openingHours}>Segunda à Sexta - 08:00h às 17:45h</p>
                        <a
                            className={styles.mapLink}
                            href="https://www.google.com/maps/place/INJEMOTORS+-+Manuten%C3%A7%C3%A3o+Automotiva/@-23.4998681,-46.4047892,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce63839b7a69b9:0xaf7640baf16e2038!8m2!3d-23.4998681!4d-46.4047892!16s%2Fg%2F11fx8w9nk7?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                        >
                            <FaMapMarkerAlt /><span> Google Maps</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;