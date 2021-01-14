import User from './User'
import { createUser } from './UsersRepository'
import BadRequestError from 'commons/errors/BadRequestError'
import { ifEmailBlacklisted } from './BlackListRepository'

export default class UsersService {
  static async createUser(user: { email: string; name: string }): Promise<User> {
    const isEmailBlacklisted = await ifEmailBlacklisted(user.email)
    if (isEmailBlacklisted) {
      throw new BadRequestError('Email is blacklisted')
    }
    return await createUser(user)
  }
}
