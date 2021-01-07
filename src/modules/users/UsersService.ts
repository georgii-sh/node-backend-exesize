import User from './User';
import { createUser } from './UsersRepository';

export default class UsersService {
  static async createUser(user: { email: string; name: string }): Promise<User> {
    return await createUser(user)
  }
}