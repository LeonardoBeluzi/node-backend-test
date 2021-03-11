import 'dotenv/config'

import express from 'express'
import helmet from 'helmet'
import router from './routes'

//Creating API and getting port
const api = express()
const port = process.env.PORT || 8000

//Defining middlewares
api.use(express.json())
api.use(helmet())
api.use(router)

//Stating API
api.listen(port, () => {
    console.log(`Api listening on port ${port}`)   
})