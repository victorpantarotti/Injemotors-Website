import { Form as ANTDForm, Button, ConfigProvider, Input, Select, } from "antd";
import TextArea from "antd/es/input/TextArea";

const Form = ({ onFinish }: { onFinish: (values: any) => void }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: "white",
                    colorBorder: "white"
                },
                components: {
                    Input: { colorText: "black" },
                    Select: {
                        colorText: "black",
                        colorIcon: "black"
                    }
                }
            }}
        >
            <ANTDForm
                name="contact__form"
                layout="vertical"
                style={{ width: "75%" }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={(err) => console.log("FORM FAILED...", err)}
            >
                <ANTDForm.Item
                    label="Seu nome"
                    name="name"
                    rules={[{ required: true, message: 'Por favor, informe o seu nome!' }]}
                >
                    <Input />
                </ANTDForm.Item>

                <ANTDForm.Item
                    label="Seu telefone"
                    name="tel"
                    rules={[{ required: true, message: 'Por favor, informe o seu telefone!' }]}
                >
                    <Input type="tel" />
                </ANTDForm.Item>

                <ANTDForm.Item
                    label="Seu e-mail"
                    name="email"
                    rules={[{ required: true, message: 'Por favor, informe o seu email!' }]}
                >
                    <Input type="email" />
                </ANTDForm.Item>

                <ANTDForm.Item name="findUs" label="Onde nos achou?" rules={[{ required: true }]}>
                    <Select
                        allowClear
                        options={[
                            { value: "Busca do Google", label: <span>Busca do Google</span> },
                            { value: "Indicação", label: <span>Indicação</span> },
                            { value: "Instagram", label: <span>Instagram</span> },
                            { value: "Facebook", label: <span>Facebook</span> },
                            { value: "Outro", label: <span>Outro</span> },
                        ]}
                    />
                </ANTDForm.Item>

                <ANTDForm.Item
                    label="O que deseja?"
                    name="message"
                    rules={[{ required: true, message: 'Por favor, informe o seu email!' }]}
                >
                    <TextArea rows={5} />
                </ANTDForm.Item>

                <ANTDForm.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </ANTDForm.Item>
            </ANTDForm>
        </ConfigProvider>
    );
}

export default Form;