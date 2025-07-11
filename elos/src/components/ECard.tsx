"use client"

import type React from "react"
import { Card, Button, Tag } from "antd"
import { EditOutlined, DeleteOutlined, EyeOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons"

interface ICard {
  nome: string
  frase: string
  favorito: boolean
  onEdit: () => void
  onDelete: () => void
  onDetail: () => void
}

const ECard: React.FC<ICard> = ({ nome, frase, favorito, onEdit, onDelete, onDetail }) => (
  <Card
    title={
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{nome}</span>
        <Tag color={favorito ? "red" : "default"} icon={favorito ? <HeartFilled /> : <HeartOutlined />}>
          {favorito ? "Favorito" : "Normal"}
        </Tag>
      </div>
    }
    variant="borderless"
    style={{ width: 300, marginBottom: 16 }}
    actions={[
      <Button key="detail" type="text" icon={<EyeOutlined />} onClick={onDetail}>
        Detalhes
      </Button>,
      <Button key="edit" type="text" icon={<EditOutlined />} onClick={onEdit}>
        Editar
      </Button>,
      <Button key="delete" type="text" danger icon={<DeleteOutlined />} onClick={onDelete}>
        Excluir
      </Button>,
    ]}
  >
    <p>{frase}</p>
  </Card>
)

export default ECard
