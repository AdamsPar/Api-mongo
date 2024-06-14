import mongoose from 'mongoose'
const { Schema } = mongoose

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export const CategoryModel = mongoose.model('category', categorySchema)
