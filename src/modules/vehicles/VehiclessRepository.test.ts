import knex from 'db/knex'
import VehiclesRepository from './VehiclesRepository'

const vehicleRepository = new VehiclesRepository(knex)

describe('Vehicles Repository', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })
  afterEach(async () => await knex.migrate.rollback())
  afterAll(async () => {
    await knex.destroy()
  })

  describe('createVehicle', () => {
    it('should return created Vehicle', async () => {
      const created = await vehicleRepository.createVehicle({ modelName: 'Test Car', plateNumber: '3333' })
      expect(created).not.toBeNull()
      expect(created.modelName).toBe('Test Car')
      expect(created.plateNumber).toBe('3333')
      expect(created.vehicleId).toBe(3)
    })

    it('should throw error if plateNumber already exists', async () => {
      expect(vehicleRepository.createVehicle({ modelName: 'Test Car', plateNumber: '1111' })).rejects.toThrow(
        /Duplicate entry/,
      )
    })

    it('should get user from database after created', async () => {
      const created = await vehicleRepository.createVehicle({ modelName: 'Test Car', plateNumber: '4444' })
      const vehicle = await vehicleRepository.getVehicleById(3)
      expect(vehicle).not.toBeNull()
      expect(created.modelName).toBe('Test Car')
      expect(created.plateNumber).toBe('4444')
      expect(created.vehicleId).toBe(3)
    })
  })

  describe('getVehicleById', () => {
    it('shoudl return existing vehicle', async () => {
      const vehicle = await vehicleRepository.getVehicleById(2)
      expect(vehicle).not.toBeNull()
      expect(vehicle.modelName).toBe('Toyota Camry')
      expect(vehicle.plateNumber).toBe('2222')
      expect(vehicle.vehicleId).toBe(2)
    })
  })
})
