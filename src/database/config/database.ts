import 'dotenv/config'
import { Dialect } from 'sequelize'

export default {
    dialect: 'mysql' as Dialect,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 5433,
    define: {
      timestamps: true,
    },
}