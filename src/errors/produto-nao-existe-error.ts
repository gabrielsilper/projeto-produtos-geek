export default class ProdutoNaoExisteError extends Error {
  constructor(message: string = 'Produto não existe!') {
    super(message);
  }
}
