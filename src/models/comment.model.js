import mongoose from 'mongoose'
const { Schema } = mongoose

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  person: {
    type: Schema.Types.ObjectId,
    ref: 'person',
    required: true
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'event'
  }
})

export const CommentModel = mongoose.model('comment', commentSchema)
