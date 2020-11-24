// Definição (estrutura) do link
export type Link = {
  // A ? indica que é opcional
  id?: number,
  url: string, // URL original
  code?: string, // URL curta
  hits?: number // Quantidade de vezes que foi acessada
}