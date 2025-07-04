"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Form, Input, Switch, Button, Space } from "antd"
import type { IAtualizarFrase } from "../../interface/IAtualizarFrase"

const AtualizarFrase: React.FC<IAtualizarFrase> = ({ frase, onSubmit, onCancel }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    form.setFieldsValue({
      nome: frase.nome,
      frase: frase.frase,
      favorito: frase.favorito,
    })
  }, [frase, form])

  const handleSubmit = async (values: { nome: string; frase: string; favorito: boolean }) => {
    setLoading(true)
    try {
      onSubmit({
        ...frase,
        nome: values.nome,
        frase: values.frase,
        favorito: values.favorito,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <h3>Editar Frase</h3>

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
            Atualizar
          </Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default AtualizarFrase
