import supertest from 'supertest'
import api from '../../src/index'

describe('User', () => {
    it('should list all users from database', async(done) => {
        const response = await supertest(api)
            .get('/user')

        expect(response.status).toEqual(200)
        expect(response.body).toBeInstanceOf(Array)
        done()
    })
})