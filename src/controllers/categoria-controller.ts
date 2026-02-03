import Categoria from "entities/categoria";
import { Request, Response } from "express";
import CategoriaService from "services/categoriaService";

export default class CategoriaController{
    constructor(private categoriaService: CategoriaService){
    }
    async getAll(_req: Request, res: Response) {
        const categoria = await this.categoriaService.getAll();
        return res.json(categoria);
      }
    
      async getById(req: Request, res: Response) {
        const { id } = req.params;
        const categoria = await this.categoriaService.getById(id as string);
        return res.json(categoria);
      }
    
      async create(req: Request, res: Response) {
        const CategoriaData = req.body as Categoria;
        const newCategoria = await this.categoriaService.create(CategoriaData);
        return res.status(201).json(newCategoria);
      }
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const categoriaData = req.body as Partial<Categoria>;
        const updatedCategoria = await this.categoriaService.update(id as string, categoriaData);
        return res.json(updatedCategoria);
      }
    
      async delete(req: Request, res: Response) {
        const { id } = req.params;
        await this.categoriaService.delete(id as string);
        return res.status(204).send();
      }
    }
    