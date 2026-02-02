import { appDataSource } from 'database/data-source';
import Produto from 'entities/produto';
import { Repository } from 'typeorm';

export default class ProdutoRepository extends Repository<Produto> {
  constructor() {
    super(Produto, appDataSource.manager);
  }
}
