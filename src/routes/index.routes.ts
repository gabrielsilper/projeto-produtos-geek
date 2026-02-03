import { Router } from 'express';
import produtoRouter from './produto.routes';
import categoriaRouter from './categoria.routes';

const indexRouter = Router();

indexRouter.use('/categorias', categoriaRouter);
indexRouter.use('/produtos', produtoRouter);

export default indexRouter;
