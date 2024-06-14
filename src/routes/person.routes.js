import { Router } from 'express'
import { PersonController } from '../controllers/person.controller.js'

export const PersonRouter = Router()

const personController = new PersonController()

PersonRouter.get('/api/person', personController.getAllPerson)
PersonRouter.post('/api/person', personController.createPerson)
PersonRouter.get('/api/person/:id', personController.getPerson)
PersonRouter.delete('/api/person/:id', personController.deletePerson)
PersonRouter.put('/api/person/:id', personController.updatePerson)
