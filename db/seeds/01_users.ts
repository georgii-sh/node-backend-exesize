import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { userId: 1, name: 'John Doe', email: 'john.doe@sevenpeakssoftware.com' },
    { userId: 2, name: 'Jane Doe', email: 'jane.doe@sevenpeakssoftware.com' },
  ])
}
