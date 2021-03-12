import { Request, Response, NextFunction } from 'express'
import { ValidationError } from 'sequelize'

export default (error: Error, request: Request, response: Response, next: NextFunction) => {
    //Check if it is a sequelize validation error
    if (error instanceof ValidationError){
        const validationError: ValidationError = error as ValidationError 

        //Return only the message
        const responseError = validationError.errors.map((item) => {
            return item.message
        })

        return response.status(400).send({ errors: responseError })
    }

    return response.status(500).send({ error: error.message })       
}