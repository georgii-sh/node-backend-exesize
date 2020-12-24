import Knex from 'knex'
import { knexConfig } from 'config'
import UsersRepository from './UsersRepository'

const knex = Knex(knexConfig)
const usersRepository = new UsersRepository(knex)

describe('Users Repository', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })
  afterEach(async () => await knex.migrate.rollback())
  afterAll(async () => {
    await knex.destroy()
  })

  describe('createUser', () => {
    it('should return created User', async () => {
      const created = await usersRepository.createUser({ name: 'Test user', email: 'test@sevenpeakssoftware.com' })
      expect(created).not.toBeNull()
      expect(created.email).toBe('test@sevenpeakssoftware.com')
      expect(created.name).toBe('Test user')
      expect(created.userId).toBe(3)
    })

    it('should throw error if email already exists', async () => {
      expect(
        usersRepository.createUser({ name: 'Test user', email: 'john.doe@sevenpeakssoftware.com' }),
      ).rejects.toThrow(/Duplicate entry/)
    })

    it('should get user from database after created', async () => {
      await usersRepository.createUser({ name: 'Test user', email: 'test@sevenpeakssoftware.com' })
      const user = await usersRepository.getUserById(3)
      expect(user).not.toBeNull()
      expect(user.email).toBe('test@sevenpeakssoftware.com')
      expect(user.name).toBe('Test user')
      expect(user.userId).toBe(3)
    })
  })

  describe('getUserById', () => {
    it('shoudl return existing user', async () => {
      const user = await usersRepository.getUserById(2)
      expect(user).not.toBeNull()
      expect(user.email).toBe('jane.doe@sevenpeakssoftware.com')
      expect(user.name).toBe('Jane Doe')
      expect(user.userId).toBe(2)
    })
  })
})
