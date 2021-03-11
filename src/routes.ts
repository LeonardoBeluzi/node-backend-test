import Router from 'express'
import BaseRoute from './routes/BaseRoute'

//Creating router
const router = Router()

//Adding routes
router.use(BaseRoute)

export default router