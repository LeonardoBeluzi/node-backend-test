import Sequelize, { Model } from 'sequelize'
import database from './index'

class User extends Model {
    public id: number
    public name: string
    public dob: Date
    public address: string
    public description: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

User.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Field "name" cannot be empty'
                },

                len: {
                    args: [3, 255],
                    msg: 'Field "name" must be between 3 and 255 characters'
                }
            }
        },

        dob: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Field "dob" cannot be empty'
                },

                isDate: {
                    args: true,
                    msg: 'Field "dob" is not a valid date'
                }
            }
        },

        address: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Field "address" cannot be empty'
                },

                len: {
                    args: [5, 255],
                    msg: 'Field "address" must be between 5 and 255 characters'
                }
            }
        },

        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {
        sequelize: database,
        tableName: 'users',
        timestamps: true,
        underscored: false
    }
)

export default User