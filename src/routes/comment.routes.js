import { Router } from 'express'
import { CommentController } from '../controllers/comment.controller.js'

export const CommentRouter = Router()

const commentController = new CommentController()

CommentRouter.get('/api/comment', commentController.getAllComment)
CommentRouter.post('/api/comment', commentController.createComment)
CommentRouter.get('/api/comment/:id', commentController.getComment)
CommentRouter.delete('/api/comment/:id', commentController.deleteComment)
CommentRouter.put('/api/comment/:id', commentController.updateComment)
