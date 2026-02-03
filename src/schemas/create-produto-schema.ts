import { z } from 'zod';

export const createProdutoSchema = z.object({
  nome: z
    .string('Nome é obrigatório e deve ser uma string.')
    .min(3, 'Nome deve ter pelo menos 3 caracteres.')
    .max(50, 'Nome deve ter no máximo 50 caracteres.')
    .regex(/^[a-zA-Z0-9\s]+$/, 'Nome só pode conter letras, números e espaços.'),

  descricao: z
    .string('Descrição é opcional, mas deve ser uma string.')
    .min(3, 'Descrição deve ter pelo menos 3 caracteres.')
    .max(120, 'Descrição deve ter no máximo 120 caracteres.')
    .optional(),

  preco: z
    .number('Preço é um valor real (ex. 12.50) e é obrigatório.')
    .refine((preco) => preco > 0, 'Preço deve ter maior que zero!'),

  estoque: z
    .int('Estoque é um valor inteiro e é obrigatório.')
    .gte(0, 'Estoque deve ser maior ou igual a zero!'),

  categoria: z
    .string('Você deve informar obrigatoriamente um ID de uma categoria'),
});
