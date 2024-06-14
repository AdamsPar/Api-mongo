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
  date: {
    type: Date,
    required: true
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true
  }],
  faculty: [{
    type: String,
    required: true
  }],
  place: {
    type: Schema.Types.ObjectId,
    ref: 'place',
    required: true
  },
  person: [{
    type: Schema.Types.ObjectId,
    ref: 'person',
    required: true
  }],
  comment: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
}, { versionKey: false })

export const EventModel = mongoose.model('event', eventSchema)
