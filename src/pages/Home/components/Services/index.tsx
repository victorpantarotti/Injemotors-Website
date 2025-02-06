import { BsFuelPumpFill } from "react-icons/bs";

import styles from "./Services.module.scss";

const Services = () => {
    return (
        <section className={styles.services}>
            <h2>Nossos serviços</h2>
            <ul>
                <li>
                    <BsFuelPumpFill />
                    <h3>Injeção Eletrônica</h3>
                </li>
                <li>
                    <BsFuelPumpFill />
                    <h3>Injeção Eletrônica</h3>
                </li>
                <li>
                    <BsFuelPumpFill />
                    <h3>Injeção Eletrônica</h3>
                </li>
                <li>
                    <BsFuelPumpFill />
                    <h3>Injeção Eletrônica</h3>
                </li>
            </ul>
        </section>
    );
}

export default Services;