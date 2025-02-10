import services from "@/data/services";

import styles from "./Services.module.scss";

const Services = () => {
    return (
        <section className={styles.services} id="servicos">
            <h2>Nossos serviços</h2>
            <ul>
                {services.map((service, i) => (
                    <li key={i}>
                        <img src={service.img} alt={service.label} />
                        <div>
                            <h3>{service.label}</h3>
                            <p>{service.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;