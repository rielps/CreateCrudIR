"use client"

import type React from "react"
import { Space, Typography, Empty } from "antd"
import ECard from "../ECard"
import type { IListarFrases } from "../../interface/IListarFrases"

const { Title } = Typography

const ListarFrases: React.FC<IListarFrases> = ({ frases, onEdit, onDelete, onDetail }) => {
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div style={{ textAlign: "center" }}>
        <Title level={2}>Minhas Frases</Title>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {frases.length === 0 ? (
          <Empty description="Nenhuma frase cadastrada ainda" style={{ marginTop: "40px" }} />
        ) : (
          frases.map((frase) => (
            <ECard
              key={frase.id}
              nome={frase.nome}
              frase={frase.frase}
              favorito={frase.favorito}
              onEdit={() => onEdit(frase)}
              onDelete={() => onDelete(frase.id)}
              onDetail={() => onDetail(frase)}
            />
          ))
        )}
      </div>
    </Space>
  )
}

export default ListarFrases
