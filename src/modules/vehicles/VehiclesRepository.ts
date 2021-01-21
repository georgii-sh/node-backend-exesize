import Knex from 'knex'
import Vehicle from './Vehicle'

class VehiclesRepository {
  constructor(private knex: Knex) {}

  async createVehicle(vehicle: { modelName: string; plateNumber: string }): Promise<Vehicle> {
    const insertedId = await this.knex('vehicles').insert(vehicle).into('vehicles')
    const created = await this.knex('vehicles').where({ vehicleId: insertedId }).first()
    return created
  }

  async getVehicleById(vehicleId: number): Promise<Vehicle> {
    const user = await this.knex('vehicles').where({ vehicleId }).first()
    return user
  }
}

export default VehiclesRepository
