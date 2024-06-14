import { Router } from 'express'
import { EventController } from '../controllers/event.controller.js'

export const EventRouter = Router()

const eventController = new EventController()

EventRouter.get('/api/event', eventController.getAllEvent)
EventRouter.post('/api/event', eventController.createEvent)
EventRouter.get('/api/event/:id', eventController.getEvent)
EventRouter.delete('/api/event/:id', eventController.deleteEvent)
EventRouter.put('/api/event/:id', eventController.updateEvent)
