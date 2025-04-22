import express from 'express'
import {
	getMainController,
	postMainController,
	secondMainController,
	getParamsMainController,
} from '../controllers/mainControllers'
const Routes = express.Router()

Routes.get('/', getMainController).post('/', postMainController)
Routes.get('/second', secondMainController)
Routes.get('/params/:id', getParamsMainController)
export { Routes }
