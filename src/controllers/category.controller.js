import { CategoryModel } from '../models/category.model.js'

export class CategoryController {
  createCategory = async (req, res) => {
    try {
      const newCategory = new CategoryModel(req.body)
      const category = await newCategory.save()
      res.json(category)
    } catch (error) {
      res.status(400).json({ message: 'Error creating category', error })
    }
  }

  updateCategory = async (req, res) => {
    try {
      const { id } = req.params
      const category = await CategoryModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      if (category.matchedCount) {
        const updatedCategory = await CategoryModel.findById(id)
        return res.json(updatedCategory)
      }
      return res.status(404).json({ message: 'Event not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error updating category', error })
    }
  }

  deleteCategory = async (req, res) => {
    try {
      const { id } = req.params
      const category = await CategoryModel.deleteOne({ _id: id })
      if (category.deletedCount) {
        return res.json({ message: 'Category eliminated' })
      }
      return res.status(404).json({ message: 'Category not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting category', error })
    }
  }

  getAllCategory = async (req, res) => {
    try {
      const comment = await CategoryModel.find()
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'No category found', error })
    }
  }

  getCategory = async (req, res) => {
    try {
      const { id } = req.params
      const category = await CategoryModel.findById(id)
      if (category) {
        return res.json(category)
      }
      return res.status(404).json({ message: 'Category not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error finding category', error })
    }
  }
}
