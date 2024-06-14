import { Router } from 'express'
import { CityController } from '../controllers/city.controller.js'

export const CityRouter = Router()

const cityController = new CityController()

CityRouter.get('/api/city', cityController.getAllCity)
CityRouter.post('/api/city', cityController.createCity)
CityRouter.get('/api/city/:id', cityController.getCity)
CityRouter.delete('/api/city/:id', cityController.deleteCity)
CityRouter.put('/api/city/:id', cityController.updateCity)
