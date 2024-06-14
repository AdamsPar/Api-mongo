import { CommentModel } from '../models/comment.model.js'
import { EventModel } from '../models/event.model.js'

export class CommentController {
  createComment = async (req, res) => {
    try {
      const { event } = req.body

      const eventToUpdate = await EventModel.findById(event)
      if (!eventToUpdate) {
        return res.status(404).json({ message: 'Event not found, comment can\'t be realized' })
      }

      const newComment = new CommentModel(req.body)
      await newComment.save()

      await EventModel.findByIdAndUpdate(event, { $push: { comment: newComment._id } })
      return res.json(newComment)
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
      return res.status(404).json({ message: 'Comment not found' })
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
