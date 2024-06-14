import mongoose from 'mongoose'
const { Schema } = mongoose

const eventSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }
  ],
  faculty: [{
    type: String,
    required: true
  }]
})

export const EventModel = mongoose.model('event', eventSchema)
