"use client"

import { useState } from "react"
import { Button, Modal, Space, message } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import ListarFrases from "../components/Crud/ListarFrases"
import IncluirFrase from "../components/Crud/IncluirFrase"
import AtualizarFrase from "../components/Crud/AtualizarFrase"
import DetalharFrase from "../components/Crud/DetalharFrase"
import Layout from "../components/Layout"
import type { IFrase } from "../interface/IFrase"

type ModalType = "incluir" | "atualizar" | "detalhar" | null

const Home = () => {
  // Estados principais (equivalente aos @Input/@Output do Angular)
  const [frases, setFrases] = useState<IFrase[]>([])
  const [modalType, setModalType] = useState<ModalType>(null)
  const [selectedFrase, setSelectedFrase] = useState<IFrase | null>(null)
  const [nextId, setNextId] = useState(1)

  // Operação CREATE (equivalente ao @Output do componente IncluirFrase)
  const handleIncluirFrase = (novaFrase: Omit<IFrase, "id">) => {
    const fraseComId: IFrase = {
      ...novaFrase,
      id: nextId,
    }
    setFrases([...frases, fraseComId])
    setNextId(nextId + 1)
    setModalType(null)
  }

  // Operação UPDATE (equivalente ao @Output do componente AtualizarFrase)
  const handleAtualizarFrase = (fraseAtualizada: IFrase) => {
    setFrases(frases.map((f) => (f.id === fraseAtualizada.id ? fraseAtualizada : f)))
    setModalType(null)
    setSelectedFrase(null)
  }

  // Operação DELETE - VERSÃO SIMPLIFICADA PARA TESTE
  const handleDeletarFrase = (id: number) => {
    console.log("=== FUNÇÃO DELETAR CHAMADA ===")
    console.log("ID recebido:", id)

    // Teste simples: mostrar alert primeiro
    const confirmar = window.confirm("Tem certeza que deseja excluir esta frase?")

    if (confirmar) {
      console.log("Usuário confirmou exclusão")

      setFrases((prevFrases) => {
        const novasFrases = prevFrases.filter((f) => f.id !== id)
        console.log("Frases após exclusão:", novasFrases)
        return novasFrases
      })

      // Fechar modal se estiver aberto
      setModalType(null)
      setSelectedFrase(null)

      message.success("Frase excluída com sucesso!")
      console.log("Exclusão concluída")
    } else {
      console.log("Usuário cancelou exclusão")
    }
  }

  // Handlers para abrir modais (equivalente aos @Input dos componentes)
  const abrirModalIncluir = () => {
    setSelectedFrase(null)
    setModalType("incluir")
  }

  const abrirModalAtualizar = (frase: IFrase) => {
    setSelectedFrase(frase)
    setModalType("atualizar")
  }

  const abrirModalDetalhar = (frase: IFrase) => {
    setSelectedFrase(frase)
    setModalType("detalhar")
  }

  const fecharModal = () => {
    setModalType(null)
    setSelectedFrase(null)
  }

  return (
    <Layout>
      <div style={{ padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Botão para abrir modal de inclusão */}
          <div style={{ textAlign: "center" }}>
            <Button type="primary" size="large" icon={<PlusOutlined />} onClick={abrirModalIncluir}>
              Cadastre uma frase
            </Button>
          </div>

          {/* Debug: Mostrar quantas frases existem */}
          <div style={{ textAlign: "center", color: "#666" }}>
            <small>Total de frases: {frases.length}</small>
          </div>

          {/* Componente de Listagem (recebe props equivalentes aos @Input do Angular) */}
          <ListarFrases
            frases={frases}
            onEdit={abrirModalAtualizar}
            onDelete={handleDeletarFrase}
            onDetail={abrirModalDetalhar}
          />
        </Space>

        {/* Modal para Incluir Frase */}
        <Modal title="Nova Frase" open={modalType === "incluir"} onCancel={fecharModal} footer={null} destroyOnClose>
          <IncluirFrase onSubmit={handleIncluirFrase} onCancel={fecharModal} />
        </Modal>

        {/* Modal para Atualizar Frase */}
        <Modal
          title="Editar Frase"
          open={modalType === "atualizar"}
          onCancel={fecharModal}
          footer={null}
          destroyOnClose
        >
          {selectedFrase && (
            <AtualizarFrase frase={selectedFrase} onSubmit={handleAtualizarFrase} onCancel={fecharModal} />
          )}
        </Modal>

        {/* Modal para Detalhar Frase */}
        <Modal title="" open={modalType === "detalhar"} onCancel={fecharModal} footer={null} destroyOnClose width={700}>
          {selectedFrase && (
            <DetalharFrase
              frase={selectedFrase}
              onEdit={abrirModalAtualizar}
              onDelete={handleDeletarFrase}
              onClose={fecharModal}
            />
          )}
        </Modal>
      </div>
    </Layout>
  )
}

export default Home
