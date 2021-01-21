import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments('vehiclesId').primary().notNullable()
    table.string('modelName').notNullable()
    table.string('plateNumber').notNullable().unique('plateNumber')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('vehicles')
}
