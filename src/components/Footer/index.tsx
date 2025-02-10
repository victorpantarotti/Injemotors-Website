import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2>Injemotors - Todos os direitos reservados © 2025</h2>
            <h2>Endereço: Rua Ilha de São Francisco, 311 – Vila Silva Teles, São Paulo – SP | Telefone: (11) 95723-2971</h2>
        </footer>
    );
}

export default Footer;