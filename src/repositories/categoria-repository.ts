import { appDataSource } from "database/data-source";
import Categoria from "entities/categoria";
import { Repository } from "typeorm";

export default class CategoriaRepository extends Repository<Categoria>{
    constructor() {
    super( Categoria, appDataSource.manager);
    }

}