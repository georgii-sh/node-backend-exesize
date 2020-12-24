import User from "./User";
import UsersRepository from "./UsersRepository";

export default class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user: any): Promise<User> {
    const creater = await this.usersRepository.createUser(user)
    return creater
  }
}