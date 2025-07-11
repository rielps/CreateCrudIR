import type { IFrase } from "./IFrase" 
export interface IIncluirFrase {
  onSubmit: (frase: Omit<IFrase, "id">) => void
  onCancel: () => void
}
