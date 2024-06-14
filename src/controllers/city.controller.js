import { CityModel } from '../models/city.model.js'

export class CityController {
  createCity = async (req, res) => {
    try {
      const newCity = new CityModel(req.body)
      const city = await newCity.save()
      res.json(city)
    } catch (error) {
      res.status(400).json({ message: 'Error creating City', error })
    }
  }

  updateCity = async (req, res) => {
    try {
      const { id } = req.params
      const city = await CityModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      if (city.matchedCount) {
        const updatedCity = await CityModel.findById(id)
        return res.json(updatedCity)
      }
      return res.status(404).json({ message: 'City not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error updating City', error })
    }
  }

  deleteCity = async (req, res) => {
    try {
      const { id } = req.params
      const city = await CityModel.deleteOne({ _id: id })
      if (city.deletedCount) {
        return res.json({ message: 'City eliminated' })
      }
      return res.status(404).json({ message: 'City not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting City', error })
    }
  }

  getAllCity = async (req, res) => {
    try {
      const city = await CityModel.find()
      res.json(city)
    } catch (error) {
      res.status(400).json({ message: 'Error finding cities', error })
    }
  }

  getCity = async (req, res) => {
    try {
      const { id } = req.params
      const city = await CityModel.findById(id)
      if (city) {
        return res.json(city)
      }
      return res.status(404).json({ message: 'City not found' })
    } catch (error) {
      res.status(400).json({ message: 'Error finding city', error })
    }
  }
}
