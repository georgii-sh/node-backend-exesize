import Knex from 'knex'
import { getMaxListeners } from 'process'
import User from './User'

export default class UsersRepository {
  constructor(private readonly knex: Knex) {}

  async createUser(user: { email: string; name: string }): Promise<User> {
    const insertedId = await this.knex('users').insert(user).into('users')
    const created = await this.knex('users').where({ userId: insertedId }).first()
    return created
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.knex('users').where({ userId }).first()
    return user
  }



}
