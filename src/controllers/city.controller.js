import { CityModel } from '../models/city.model.js'

export class CityController {
  createCity = async (req, res) => {
    try {
      const newCity = new CityModel(req.body)
      const city = await newCity.save()
      res.json(city)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
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
      res.json(city)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  deleteCity = async (req, res) => {
    try {
      const { id } = req.params
      await CityModel.deleteOne({ _id: id })
      res.json({ message: 'City eliminated' })
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  getAllCity = async (req, res) => {
    try {
      const city = await CityModel.find()
      res.json(city)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }

  getCity = async (req, res) => {
    try {
      const { id } = req.params
      const city = await CityModel.findById(id)
      res.json(city)
    } catch (error) {
      res.status(400).json({ message: 'Error creating person', error })
    }
  }
}
