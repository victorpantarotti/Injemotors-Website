import services from "@/data/services";

import styles from "./Services.module.scss";

const Services = () => {
    return (
        <section className={styles.services} id="servicos">
            <h2>Nossos serviços</h2>
            <ul>
                {services.map((service, i) => (
                    <li key={i}>
                        {service.icon}
                        <h3>{service.label}</h3>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;