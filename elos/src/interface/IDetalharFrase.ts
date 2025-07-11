import type { IFrase } from "./IFrase"

export interface IDetalharFrase {
  frase: IFrase
  onEdit: (frase: IFrase) => void
  onDelete: (id: number) => void
  onClose: () => void
}
