import { Router } from 'express'
import { PlaceController } from '../controllers/place.controller.js'

export const PlaceRouter = Router()

const placeController = new PlaceController()

PlaceRouter.get('/api/place', placeController.getAllPlace)
PlaceRouter.post('/api/place', placeController.createPlace)
PlaceRouter.get('/api/place/:id', placeController.getPlace)
PlaceRouter.delete('/api/place/:id', placeController.deletePlace)
PlaceRouter.put('/api/place/:id', placeController.updatePlace)
