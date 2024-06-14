import mongoose from 'mongoose'
const { Schema } = mongoose

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, { versionKey: false })

export const CategoryModel = mongoose.model('category', categorySchema)
