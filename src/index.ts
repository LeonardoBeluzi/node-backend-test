import 'dotenv/config'

import express from 'express'
import helmet from 'helmet'
import errorHandler from './middlewares/errorHandler'
import router from './routes'

//Creating API and getting port
const api = express()
const port = process.env.PORT || 8000

//Defining middlewares
api.use(express.json())
api.use(helmet())
api.use(router)
api.use(errorHandler)

//Stating API
if (require.main === module) {
    api.listen(port, () => {
        console.log(`Api listening on port ${port}`)   
    })
}

export default api;