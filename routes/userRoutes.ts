import express from 'express'
import { getUserController, postUserController, patchUserController } from '../controllers/userControllers'
const UserRoutes = express.Router()

UserRoutes.get('/:userId', getUserController).post('/', postUserController).patch('/', patchUserController)

export { UserRoutes }
