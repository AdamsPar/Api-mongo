import { Router } from 'express'
import { CategoryController } from '../controllers/category.controller.js'

export const CategoryRouter = Router()

const categoryController = new CategoryController()

CategoryRouter.get('/api/category', categoryController.getAllCategory)
CategoryRouter.post('/api/category', categoryController.createCategory)
CategoryRouter.get('/api/category/:id', categoryController.getCategory)
CategoryRouter.delete('/api/category/:id', categoryController.deleteCategory)
CategoryRouter.put('/api/category/:id', categoryController.updateCategory)
