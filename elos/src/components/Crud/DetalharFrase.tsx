"use client"

import type React from "react"
import { Card, Button, Space, Tag, Descriptions } from "antd"
import { EditOutlined, DeleteOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons"
import type { IDetalharFrase } from "../../interface/IDetalharFrase"

const DetalharFrase: React.FC<IDetalharFrase> = ({ frase, onEdit, onDelete, onClose }) => {
  return (
    <Card
      title="Detalhes da Frase"
      extra={
        <Button type="text" onClick={onClose}>
          Fechar
        </Button>
      }
      style={{ maxWidth: 600 }}
    >
      <Descriptions column={1} bordered>
        <Descriptions.Item label="ID">{frase.id}</Descriptions.Item>
        <Descriptions.Item label="Nome">{frase.nome}</Descriptions.Item>
        <Descriptions.Item label="Frase">{frase.frase}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={frase.favorito ? "red" : "default"} icon={frase.favorito ? <HeartFilled /> : <HeartOutlined />}>
            {frase.favorito ? "Favorito" : "Normal"}
          </Tag>
        </Descriptions.Item>
      </Descriptions>

      <div style={{ marginTop: 16, textAlign: "center" }}>
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => onEdit(frase)}>
            Editar
          </Button>
          <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(frase.id)}>
            Excluir
          </Button>
        </Space>
      </div>
    </Card>
  )
}

export default DetalharFrase
