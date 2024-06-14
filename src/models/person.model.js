import mongoose from 'mongoose'
const { Schema } = mongoose

const personSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rol: [{
    type: String,
    required: true
  }],
  email: {
    type: String,
    required: true
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'city'
  }
})

export const PersonModel = mongoose.model('person', personSchema)
