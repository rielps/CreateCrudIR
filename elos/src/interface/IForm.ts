export interface IForm {
  onSubmit: (values: { nome: string; frase: string }) => void
  initialValues?: { nome: string; frase: string }
}
