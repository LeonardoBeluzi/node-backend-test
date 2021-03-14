import supertest from 'supertest'
import api from '../../src/index'

let id: number

describe('User', () => {
    it('should list all users from database', async(done) => {
        const response = await supertest(api)
            .get('/user')

        expect(response.status).toEqual(200)
        expect(response.body).toBeInstanceOf(Array)
        done()
    })
    
    it('should create a new user', async(done) => {
        const response = await supertest(api)
        .post('/user') 
        .send({
            name: 'Leonardo',
            dob: '1995-09-29',
            address: 'Avenida Brasil, 2042',
            description: 'Minha descricao'
        })
        
        expect(response.status).toEqual(201)
        expect(response.body).toBeInstanceOf(Object)
        id = response.body.id
        done()
    })

    it('should update an existing user', async(done) => {
        const response = await supertest(api)
        .patch(`/user/${id}`) 
        .send({
            name: 'Leonardo Beluzi'
        })
        
        expect(response.status).toEqual(200)
        expect(response.body).toBeInstanceOf(Object)
        done()
    })

    it('should list an existing users', async(done) => {
        const response = await supertest(api)
            .get(`/user/${id}`)

        expect(response.status).toEqual(200)
        expect(response.body).toBeInstanceOf(Object)
        done()
    })

    it('should delete an existing user', async(done) => {
        const response = await supertest(api)
        .delete(`/user/${id}`)
        
        expect(response.status).toEqual(200)
        expect(response.body).toBeInstanceOf(Object)
        done()
    })
})