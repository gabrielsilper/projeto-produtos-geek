import CategoriaController from "controllers/categoria-controller";
import { Router } from "express";
import CategoriaRepository from "repositories/categoria-repository";
import CategoriaService from "services/categoriaService";

const categoriaRouter = Router();
const categoriaService = new CategoriaService(new CategoriaRepository());
const categoriaController = new CategoriaController(categoriaService)


categoriaRouter.get('/',(req,res)=> categoriaController.getAll(req,res));
categoriaRouter.post('/', (req, res) => categoriaController.create(req, res));
categoriaRouter.get('/:id', (req, res) => categoriaController.getById(req, res));
categoriaRouter.put('/:id', (req, res) => categoriaController.update(req, res));
categoriaRouter.delete('/:id', (req, res) => categoriaController.delete(req, res));

export default categoriaRouter;