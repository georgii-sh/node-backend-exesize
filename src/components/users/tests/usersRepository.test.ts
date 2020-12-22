import Knex from 'knex'
import { knexConfig } from 'config'
import { createUser } from '../usersRepository'

const knex = Knex(knexConfig)

describe('Users Repository', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })
  afterEach(async () => await knex.migrate.rollback())
  afterAll(async () => await knex.destroy())
  describe('createUser', () => {
    it('should return created User', async () => {
      const created = await createUser({ name: 'Test user', email: 'test@sevenpeakssoftware.com' })
      expect(created).not.toBeNull()
      expect(created.email).toBe('test@sevenpeakssoftware.com')
      expect(created.name).toBe('Test user')
      expect(created.userId).toBe(3)
    })

    it('should return error if email is exists', async () => {
      expect(createUser({ name: 'Test user', email: 'john.doe@sevenpeakssoftware.com' })).rejects.toThrow(
        /Duplicate entry/,
      )
    })
  })
})
