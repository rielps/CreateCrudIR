import type { IFrase } from "./IFrase"

export interface IListarFrases {
  frases: IFrase[]
  onEdit: (frase: IFrase) => void
  onDelete: (id: number) => void
  onDetail: (frase: IFrase) => void
}
