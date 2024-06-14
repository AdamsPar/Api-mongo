import mongoose from 'mongoose'
const { Schema } = mongoose

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'person'
  }]
})

export const CommentModel = mongoose.model('comment', commentSchema)
