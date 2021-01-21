import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('usersVehicles', (table) => {
    table.increments('uservehicleId').primary().notNullable()
    table.integer('userId').notNullable().index().references('userId').inTable('users')
    table.integer('vehicleId').notNullable().index().references('vehicleId').inTable('vehicles')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('usersVehicles')
}
