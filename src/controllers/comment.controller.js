import { CommentModel } from '../models/comment.model.js'

export class CommentController {
  createComment = async (req, res) => {
    try {
      const newComment = new CommentModel(req.body)
      const comment = await newComment.save()
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'Error creating comment', error })
    }
  }

  updateComment = async (req, res) => {
    try {
      const { id } = req.params
      const comment = await CommentModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      if (comment.matchedCount) {
        const updateComment = await CommentModel.findById(id).populate('person')
        return res.json(updateComment)
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating comment', error })
    }
  }

  deleteComment = async (req, res) => {
    try {
      const { id } = req.params
      await CommentModel.deleteOne({ _id: id })
      res.json({ message: 'City eliminated' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting comment', error })
    }
  }

  getAllComment = async (req, res) => {
    try {
      const comment = await CommentModel.find().populate('person')
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'No comments found', error })
    }
  }

  getComment = async (req, res) => {
    try {
      const { id } = req.params
      const comment = await CommentModel.findById(id).populate('person')
      res.json(comment)
    } catch (error) {
      res.status(400).json({ message: 'Error finding comment', error })
    }
  }
}
