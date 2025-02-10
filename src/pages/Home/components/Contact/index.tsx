import emailjs from '@emailjs/browser';

import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { message } from 'antd';

import Form from "./Form";

import styles from "./Contact.module.scss";

const Contact = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: any) => {
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, values, {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
                console.log("SUCCESS!");
                messageApi.open({
                    type: "success",
                    content: "Formulário enviado com sucesso!",
                });
            },
            (error) => {
                console.log("FAILED...", error);
                messageApi.open({
                    type: "error",
                    content: "Ocorreu um erro!",
                });
            },
        );
    }

    return (
        <section className={styles.contact} id="contato">
            {contextHolder}
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Contato</h2>
                <ul className={styles.container}>
                    <li>
                        <a href="https://wa.me/5511957232971" target="_blank">
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a href="tel:+5511957232971">
                            <FaPhoneAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/injemotors/" target="_blank">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/Injemotors/" target="_blank">
                            <FaFacebook />
                        </a>
                    </li>
                </ul>
                <div className={styles.form}>
                    <h2 className={styles.form__title}>ou se preferir:</h2>
                    <Form onFinish={onFinish} />
                </div>
            </div>
        </section>
    );
}

export default Contact;