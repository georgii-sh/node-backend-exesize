import knex from 'db/knex'
import User from './User'

export async function createUser(user: { email: string; name: string }): Promise<User> {
  const insertedId = await knex('users').insert(user).into('users')
  const created = await knex('users').where({ userId: insertedId }).first()
  return created
}

export async function getUserById(userId: number): Promise<User> {
  const user = await knex('users').where({ userId }).first()
  return user
}

export async function assingVehicleToUser(userId: number, vehicleId: number): Promise<any> {
  const insertedId = await knex('usersVehicles').insert({ userId, vehicleId }).into('usersVehicles')
  const created = await knex('usersVehicles').where({ userId: insertedId }).first()
  return created
}
