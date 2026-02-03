import Produto from 'entities/produto';
import {Request, Response} from 'express'
import ProdutoService from 'services/produto-service';

export default class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  async getAll(_req: Request, res: Response) {
    const sensors = await this.produtoService.getAll();
    return res.json(sensors);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const sensor = await this.produtoService.getById(id as string);
    return res.json(sensor);
  }

  async create(req: Request, res: Response) {
    const sensorData = req.body as Produto;
    const newSensor = await this.produtoService.create(sensorData);
    return res.status(201).json(newSensor);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const sensorData = req.body as Partial<Produto>;
    const updatedSensor = await this.produtoService.update(id as string, sensorData);
    return res.json(updatedSensor);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.produtoService.delete(id as string);
    return res.status(204).send();
  }
}
