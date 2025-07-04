import type { IFrase } from "./IFrase"

export interface IAtualizarFrase {
  frase: IFrase
  onSubmit: (frase: IFrase) => void
  onCancel: () => void
}
