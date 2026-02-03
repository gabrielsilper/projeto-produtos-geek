import { regex, z } from 'zod';

export const createCategoriaSchema = z.object({
    nome:z
    .string("Nome é obrigatório, deve ser único e uma string")
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .regex(/^[a-zA-Z\s]+$/,"Nome pode conter apenas letras e espaços"),

    descricao:z
    .string("Descrição é opcional e uma string")
    .min(3, "Descrição deve ter pelo menos 3 caracteres")
    .max(50, "Descriçãor no máximo 50 caracteres")
    .regex(/^[a-zA-Z\s]+$/,"Descrição conter só letra e espaços")
    .optional(),
});


