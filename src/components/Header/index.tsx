import styled from "styled-components";
import OutlinedLogo from "@/assets/logo-outlined.webp";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Button, Dropdown } from "antd";

const Container = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    padding: 15px;
`

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <img src={OutlinedLogo} alt="Logo da INJEMOTORS" />
                <div className={styles.menu}>
                    <ul className={styles.links}>
                        <li>
                            <Link className={styles.link} to={"/"}>Início</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={"/"}>Serviços</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={"/"}>Quem Somos</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={"/"}>Loja</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={"/"}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    )
};

export default Header;