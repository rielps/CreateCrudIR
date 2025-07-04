export interface IModal {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: { nome: string; frase: string }) => void
  editingFrase?: { nome: string; frase: string } | null
  title: string
}
