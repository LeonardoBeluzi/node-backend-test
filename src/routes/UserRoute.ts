import Router from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.get('/user', UserController.index)
router.get('/user/:id', UserController.show)

router.post('/user', UserController.store)

router.patch('/user/:id', UserController.update)

router.delete('/user/:id', UserController.delete)

export default router