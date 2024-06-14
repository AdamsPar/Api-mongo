import mongoose from 'mongoose'
const { Schema } = mongoose

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  person: {
    type: Schema.Types.ObjectId,
    ref: 'person'
  }
}, { versionKey: false })

export const CommentModel = mongoose.model('comment', commentSchema)
