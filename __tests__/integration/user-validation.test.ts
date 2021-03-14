import supertest from 'supertest'
import api from '../../src/index'

describe('User validations', () => {    
    it('should throw a date error', async(done) => {
        const response = await supertest(api)
        .post('/user') 
        .send({
            name: 'Leonardo',
            dob: '29/09/1995',
            address: 'Avenida Brasil, 2042',
            description: 'Minha descricao'
        })
        
        expect(response.status).toEqual(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toEqual({
            errors: [
                `Field "dob" is not a valid date` 
            ]
        })
        done()
    })

    it('should throw a name error', async(done) => {
        const response = await supertest(api)
        .post('/user') 
        .send({
            name: 'L',
            dob: '1995-09-29',
            address: 'Avenida Brasil, 2042',
            description: 'Minha descricao'
        })
        
        expect(response.status).toEqual(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toEqual({
            errors: [
                `Field "name" must be between 3 and 255 characters` 
            ]
        })
        done()
    })

    it('should throw an address error', async(done) => {
        const response = await supertest(api)
        .post('/user') 
        .send({
            name: 'Leonardo',
            dob: '1995-09-29',
            address: 'Ave',
            description: 'Minha descricao'
        })
        
        expect(response.status).toEqual(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toEqual({
            errors: [
                `Field "address" must be between 5 and 255 characters` 
            ]
        })
        done()
    })

    it('should throw an error when trying to update a non-existent user', async(done) => {
        const response = await supertest(api)
        .patch('/user/0') 
        .send({
            name: 'Leonardo',
            dob: '1995-09-29',
            address: 'Ave',
            description: 'Minha descricao'
        })
        
        expect(response.status).toEqual(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toEqual({ 
            error: 'User not found' 
        })
        done()
    })

    it('should throw an error when trying to delete a non-existent user', async(done) => {
        const response = await supertest(api)
        .delete('/user/0')
        
        expect(response.status).toEqual(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toEqual({ 
            error: 'User not found' 
        })
        done()
    })
})