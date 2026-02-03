export default class CategoriaJaExisteError extends Error{
    constructor (message: string = 'Categoria já existe!'){
        super(message)
    }
}