import mongoose from 'mongoose'
const { Schema } = mongoose

const placeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: [{
    type: Schema.Types.ObjectId,
    ref: 'city'
  }]
})

export const PlaceModel = mongoose.model('place', placeSchema)
