import Produto from 'entities/produto';
import ProdutoNaoExisteError from 'errors/produto-nao-existe-error';
import ProdutoRepository from 'repositories/produto-repository';

export default class ProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async getAll() {
    return this.produtoRepository.find();
  }

  async getById(id: string) {
    const produto = await this.produtoRepository.findOneBy({ id });

    if (!produto) {
      throw new ProdutoNaoExisteError();
    }

    return produto;
  }

  async create(data: Produto) {
    const produto = this.produtoRepository.create({ ...data });
    return this.produtoRepository.save(produto);
  }

  async update(id: string, data: Partial<Produto>) {
    const produto = await this.getById(id);
    const produtoAtualizado = this.produtoRepository.merge(produto, data)
    return this.produtoRepository.save(produtoAtualizado);
  }

  async delete(id: string){
    const produto = await this.getById(id);
    await this.produtoRepository.remove(produto)
  }
}
