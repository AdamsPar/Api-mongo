import { CommentModel } from '../models/comment.model.js'

export class CommentController {
  createCity = async (req, res) => {
    try {
      const newComment = new CommentModel(req.body)
      const comment = await newComment.save()
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  updateCity = async (req, res) => {
    try {
      const { id } = req.params
      const comment = await CommentModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  deleteCity = async (req, res) => {
    try {
      const { id } = req.params
      await CommentModel.deleteOne({ _id: id })
      res.json({ message: 'City eliminated' })
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  getAllCity = async (req, res) => {
    try {
      const comment = await CommentModel.find()
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  getCity = async (req, res) => {
    try {
      const { id } = req.params
      const comment = await CommentModel.findById(id)
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }
}
