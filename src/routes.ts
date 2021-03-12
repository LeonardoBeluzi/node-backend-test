import Router from 'express'
import BaseRoute from './routes/BaseRoute'
import UserRoute from './routes/UserRoute'

//Creating router
const router = Router()

//Adding routes
router.use(UserRoute)
router.use(BaseRoute)

export default router