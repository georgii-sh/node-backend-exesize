import knex from 'db/knex'
import { ifEmailBlacklisted } from './BlackListRepository'

describe('BlackList Repository', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })
  afterEach(async () => await knex.migrate.rollback())
  afterAll(async () => {
    await knex.destroy()
  })

  describe('ifEmailBlacklisted', () => {
    it('should return true if email blacklisted', async () => {
      const result = await ifEmailBlacklisted('admin@gmail.com')
      expect(result).toBeTruthy()
    })
    it('should return false if email not blacklisted', async () => {
      const result = await ifEmailBlacklisted('not_blacklisted@gmail.com')
      expect(result).toBeFalsy()
    })
  })
})
