import { PersonModel } from '../models/person.model.js'

export class PersonController {
  createPerson = async (req, res) => {
    try {
      const newPerson = new PersonModel(req.body)
      const person = await newPerson.save()
      res.json(person)
    } catch (error) {
      res.status(400).json({ message: 'Error creating Person', error })
    }
  }

  updatePerson = async (req, res) => {
    try {
      const { id } = req.params
      const person = await PersonModel.updateOne({ _id: id },
        {
          $set: req.body
        }
      )
      if (person.matchedCount) {
        const updatePerson = await PersonModel.findById(id).populate('city')
        return res.json(updatePerson)
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating Person', error })
    }
  }

  deletePerson = async (req, res) => {
    try {
      const { id } = req.params
      await PersonModel.deleteOne({ _id: id })
      res.json({ message: 'City eliminated' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting Person', error })
    }
  }

  getAllPerson = async (req, res) => {
    try {
      const person = await PersonModel.find().populate('city')
      res.json(person)
    } catch (error) {
      res.status(400).json({ message: 'No people found', error })
    }
  }

  getPerson = async (req, res) => {
    try {
      const { id } = req.params
      const person = await PersonModel.findById(id).populate('city')
      res.json(person)
    } catch (error) {
      res.status(400).json({ message: 'Error finding Person', error })
    }
  }
}
