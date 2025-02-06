import { IoMdMenu } from "react-icons/io";

import logoOutlined from "@/assets/logo_outlined.png";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logoOutlined} alt="Logo da INJEMOTORS" />
            <div>
                <label className={styles.menuMobile} htmlFor="menuMobileInput"><IoMdMenu /></label>
                <input type="checkbox" className={styles.menuMobileInput} id="menuMobileInput" />
                <ul className={styles.linksList}>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#avaliacoes">Avaliações</a></li>
                    <li><a href="#localizacao">Nossa localização</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;