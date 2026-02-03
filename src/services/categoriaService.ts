import Categoria from "entities/categoria";
import CategoriaJaExisteError from "errors/categoria-ja-existe-error";
import CategoriaNaoExisteError from "errors/categoria-nao-existe-error";
import CategoriaRepository from "repositories/categoria-repository";

export default class CategoriaService {
    constructor(private categoriaRepository: CategoriaRepository){}

    async getAll() {
        return this.categoriaRepository.find();
    }

    async getById (id:string){
        const categoria = await this.categoriaRepository.findOneBy({id});

        if (!categoria){
            throw new CategoriaNaoExisteError();
        }
        return categoria;
    }

    async create (data: Categoria) {
        const nomeCategoriaExiste = await this.categoriaRepository.existsBy ({nome: data.nome})

        if (nomeCategoriaExiste) {
            throw new CategoriaJaExisteError();
        }

        const categoria = this.categoriaRepository.create({ ...data});
        return this.categoriaRepository.save(categoria);

    }

    async update(id: string, data: Partial<Categoria>){
        const categoria = await this.getById(id);
        const categoriaAtualizada = this.categoriaRepository.merge(categoria,data)
        return this.categoriaRepository.save(categoriaAtualizada)
    }
    
    async delete(id:string){
        const categoria = await this.getById(id)
        await this.categoriaRepository.remove(categoria)
    }

}