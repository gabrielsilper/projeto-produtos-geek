export default class CategoriaNaoExisteError extends Error{
    constructor (message: string = 'Categoria nao existe!'){
        super(message)
    }
}