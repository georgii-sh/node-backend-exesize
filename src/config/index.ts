export const knexConfig = {
  client: 'mysql2',
  connection: {
    host: process.env.MYSQL_DATABASE_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'node_backend_exesize',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD || 'password',
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'node_backend_exesize_migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
}
