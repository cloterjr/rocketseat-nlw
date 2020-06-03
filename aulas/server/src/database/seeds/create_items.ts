import Knex from 'knex';

export async function seed(knex: Knex) {
    return knex('items').insert([
        { title: 'Lampadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletronicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Organicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinho', image: 'oleo.svg' },
    ])
}