jest.mock('./UsersRepository')
jest.mock('./BlackListRepository')

import UsersService from './UsersService'
import { createUser } from './UsersRepository'
import { ifEmailBlacklisted } from './BlackListRepository'

describe('Users service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('Create User', () => {
    it('should call createUser method from repository', async () => {
      await UsersService.createUser({ email: 'test@email.com', name: 'Testt Name' })
      expect(createUser).toHaveBeenCalledTimes(1)
      expect(createUser).toHaveBeenCalledWith({ email: 'test@email.com', name: 'Testt Name' })
    })

    it('should check ifEmailBlacklisted before create', async () => {
      ;(ifEmailBlacklisted as jest.Mock).mockImplementation(() => true)
      try {
        await UsersService.createUser({ email: 'test@email.com', name: 'Testt Name' })
      } catch (e) {}
      expect(ifEmailBlacklisted).toHaveBeenCalledTimes(1)
    })

    it('should not call create user if email blacklisted', async () => {
      ;(ifEmailBlacklisted as jest.Mock).mockImplementation(() => true)
      try {
        await UsersService.createUser({ email: 'test@email.com', name: 'Testt Name' })
      } catch (e) {}
      expect(createUser).toHaveBeenCalledTimes(0)
    })
  })
})
