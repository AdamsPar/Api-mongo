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
}, { versionKey: false })

export const CommentModel = mongoose.model('comment', commentSchema)
