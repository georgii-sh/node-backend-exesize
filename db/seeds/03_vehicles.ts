import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('vehicles').del()

  // Inserts seed entries
  await knex('vehicles').insert([
    { vehicleId: 1, modelName: 'Honda CRV', plateNumber: '1111' },
    { vehicleId: 2, modelName: 'Toyota Camry', plateNumber: '2222' },
  ])
}
