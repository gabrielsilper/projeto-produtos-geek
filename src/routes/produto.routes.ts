import ProdutoController from 'controllers/produto-controller';
import { Router } from 'express';
import ProdutoRepository from 'repositories/produto-repository';
import ProdutoService from 'services/produto-service';

const produtoRouter = Router();
const produtoService = new ProdutoService(new ProdutoRepository());
const produtoController = new ProdutoController(produtoService);

produtoRouter.get('/', (req, res) => produtoController.getAll(req, res));
produtoRouter.post('/', (req, res) => produtoController.create(req, res));
produtoRouter.get('/:id', (req, res) => produtoController.getById(req, res));
produtoRouter.put('/:id', (req, res) => produtoController.update(req, res));
produtoRouter.delete('/:id', (req, res) => produtoController.delete(req, res));

export default produtoRouter;
