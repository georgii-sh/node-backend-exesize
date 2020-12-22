import Knex from 'knex'
import { knexConfig } from 'config'
import User from './User'

const knex = Knex(knexConfig)

export async function createUser(user: { email: string; name: string }): Promise<User> {
  const insertedId = await knex('users').insert(user).into('users')
  const created = await knex('users').where({ userId: insertedId }).first()
  return created
}
