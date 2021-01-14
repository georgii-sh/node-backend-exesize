import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('black_list_emails').del()

  // Inserts seed entries
  await knex('black_list_emails').insert([{ email: 'admin@gmail.com' }, { email: 'admin@admin.com' }])
}
