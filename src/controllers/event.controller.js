import { EventModel } from '../models/event.model.js'

export class EventController {
  createEvent = async (req, res) => {
    try {
      const newEvent = new EventModel(req.body)
      const event = await newEvent.save()
      res.json(event)
    } catch (error) {
      res.status(400).json({ message: 'Error creating Event', error })
    }
  }

  updateEvent = async (req, res) => {
    try {
      const { id } = req.params
      const event = await EventModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      if (event.matchedCount) {
        const updatedEvent = await EventModel.findById(id)
          .populate('category')
          .populate('place')
          .populate('person')
          .populate('comment')
          .exec()
        return res.json(updatedEvent)
      }
      return res.status(404).json({ message: 'Event not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error updating Event', error })
    }
  }

  deleteEvent = async (req, res) => {
    try {
      const { id } = req.params
      const event = await EventModel.deleteOne({ _id: id })
      if (event.deletedCount) {
        return res.json({ message: 'Event eliminated' })
      }
      return res.status(404).json({ message: 'Event not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting Event', error })
    }
  }

  getAllEvent = async (req, res) => {
    try {
      const event = await EventModel.find()
        .populate('category')
        .populate('place')
        .populate('person')
        .populate('comment')
        .exec()
      res.json(event)
    } catch (error) {
      res.status(400).json({ message: 'Error finding Events', error })
    }
  }

  getEvent = async (req, res) => {
    try {
      const { id } = req.params
      const event = await EventModel.findById(id)
        .populate('category')
        .populate('place')
        .populate('person')
        .populate('comment')
        .exec()
      if (event) {
        return res.json(event)
      }
      return res.status(404).json({ message: 'Event not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error finding Event', error })
    }
  }
}
