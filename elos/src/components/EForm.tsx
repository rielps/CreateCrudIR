import React from "react";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import EBotao from "./EBotao";
import FormItem from "antd/es/form/FormItem";

type FieldType = {
  nome?: string;
  frase?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const EForm: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <FormItem>
      <h3>Digite uma frase de sua autoria</h3>
    </FormItem>

    <Form.Item<FieldType>
      label="Seu Nome"
      nome="Seu nome"
      rules={[{ required: true, message: "Digite sua nome..." }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Sua Frase"
      frase="Sua Frase"
      rules={[{ required: true, message: "Digite a frase aqui..." }]}
    >
      <Input />
    </Form.Item>

    <FormItem>
      <EBotao placeholder="Enviar" />
    </FormItem>
  </Form>
);

export default EForm;
