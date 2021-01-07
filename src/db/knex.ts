import Knex from 'knex'
import { knexConfig } from 'config'

const knex = Knex(knexConfig)

export default knex