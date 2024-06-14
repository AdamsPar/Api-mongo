import mongoose from 'mongoose'
const { Schema } = mongoose

const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
})

export const CityModel = mongoose.model('city', citySchema)
