"use client"

import type React from "react"
import { useState } from "react"
import { Form, Input, Switch, Button, Space } from "antd"
import type { IIncluirFrase } from "../../interface/IIncluirFrase"

const IncluirFrase: React.FC<IIncluirFrase> = ({ onSubmit, onCancel }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: { nome: string; frase: string; favorito: boolean }) => {
    setLoading(true)
    try {
      onSubmit({
        nome: values.nome,
        frase: values.frase,
        favorito: values.favorito || false,
      })
      form.resetFields()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{ favorito: false }}>
      <h3>Cadastrar Nova Frase</h3>

      <Form.Item label="Nome" name="nome" rules={[{ required: true, message: "Digite seu nome..." }]}>
        <Input placeholder="Digite seu nome" />
      </Form.Item>

      <Form.Item label="Frase" name="frase" rules={[{ required: true, message: "Digite a frase aqui..." }]}>
        <Input.TextArea placeholder="Digite sua frase aqui" rows={3} />
      </Form.Item>

      <Form.Item label="Marcar como favorito" name="favorito" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            Cadastrar
          </Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default IncluirFrase
