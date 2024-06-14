import { PlaceModel } from '../models/place.model.js'

export class PlaceController {
  createPlace = async (req, res) => {
    try {
      const newPlace = new PlaceModel(req.body)
      const place = await newPlace.save()
      res.json(place)
    } catch (error) {
      res.status(400).json({ message: 'Error creating Place', error })
    }
  }

  updatePlace = async (req, res) => {
    try {
      const { id } = req.params
      const place = await PlaceModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      if (place.matchedCount) {
        const updatedPlace = await PlaceModel.findById(id).populate('city')
        return res.json(updatedPlace)
      }
      return res.status(404).json({ message: 'Place not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error updating place', error })
    }
  }

  deletePlace = async (req, res) => {
    try {
      const { id } = req.params
      const place = await PlaceModel.deleteOne({ _id: id })
      if (place.deletedCount) {
        return res.json({ message: 'place eliminated' })
      }
      return res.status(404).json({ message: 'place not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting place', error })
    }
  }

  getAllPlace = async (req, res) => {
    try {
      const Place = await PlaceModel.find().populate('city')
      res.json(Place)
    } catch (error) {
      res.status(400).json({ message: 'Error finding places', error })
    }
  }

  getPlace = async (req, res) => {
    try {
      const { id } = req.params
      const place = await PlaceModel.findById(id).populate('city')
      if (place) {
        return res.json(place)
      }
      return res.status(404).json({ message: 'Place not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error finding place', error })
    }
  }
}
