import { Router } from 'express'
import { CommentController } from '../controllers/comment.controller.js'

export const CommentRouter = Router()

const commentController = new CommentController()

CommentRouter.get('/api/city', commentController.getAllCity)
CommentRouter.post('/api/city', commentController.createCity)
CommentRouter.get('/api/city/:id', commentController.getCity)
CommentRouter.delete('/api/city/:id', commentController.deleteCity)
CommentRouter.put('/api/city/:id', commentController.updateCity)
