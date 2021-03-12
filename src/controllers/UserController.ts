import { NextFunction, Request, Response } from 'express'
import User from '../models/User'
import { IUserStore, IUserUpdate } from '../interfaces/UserInterface'

export default {
    //Retrieve all Users from the database
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await User.findAll()
            return response.send(user)
        } catch (error) {
            return next(error)
        }
    },

    //Find a single User with an id
    async show(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params

        try {
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(200).send({})
            }

            return response.send(user)
        } catch (error) {
            return next(error)
        }
    },

    //Create a User
    async store(request: Request, response: Response, next: NextFunction) {
        const requestUser: IUserStore = request.body

        try {
            const user = await User.create(requestUser)
            return response.status(201).send(user)
        } catch (error) {
            return next(error)
        }
    },

    //Update a User with the specified id in the request
    async update(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params
        const requestUser: IUserUpdate = request.body

        try {
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).send({ error: 'User not found' })
            }

            const updatedUser = await user.update(requestUser)

            return response.send(updatedUser)
        } catch (error) {
            return next(error)
        }
    },

    //Delete a User with the specified id in the request
    async delete(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params

        try {
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).send({ error: 'User not found' })
            }

            await user.destroy()

            return response.send(user)
        } catch (error) {
            return next(error)
        }
    },
}