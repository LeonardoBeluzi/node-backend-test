import { Sequelize } from 'sequelize'
import databaseConfig from '../config/database'

const sequelize: Sequelize = new Sequelize(
    {
        dialect: databaseConfig.dialect,
        username: databaseConfig.username,
        password: databaseConfig.password,
        host: databaseConfig.host,
        port: databaseConfig.port,
        database: databaseConfig.database
    }
)

export default sequelize;