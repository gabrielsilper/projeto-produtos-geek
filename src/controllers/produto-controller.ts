import Produto from 'entities/produto';
import {Request, Response} from 'express'
import ProdutoService from 'services/produto-service';

export default class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  async getAll(_req: Request, res: Response) {
    const produto = await this.produtoService.getAll();
    return res.json(produto);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const produto = await this.produtoService.getById(id as string);
    return res.json(produto);
  }

  async create(req: Request, res: Response) {
    const produtoData = req.body as Produto;
    const newProduto = await this.produtoService.create(produtoData);
    return res.status(201).json(newProduto);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const produtoData = req.body as Partial<Produto>;
    const updatedProduto = await this.produtoService.update(id as string, produtoData);
    return res.json(updatedProduto);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.produtoService.delete(id as string);
    return res.status(204).send();
  }
}
