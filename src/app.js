import mongoose from 'mongoose'
import express from 'express'
import { CityRouter } from './routes/city.routes.js'
import { CategoryRouter } from './routes/category.routes.js'
import { PlaceRouter } from './routes/place.routes.js'
import { CommentRouter } from './routes/comment.routes.js'
import { PersonRouter } from './routes/person.routes.js'
import { EventRouter } from './routes/event.routes.js'

const app = express()
app.use(express.json())
const url = 'mongodb://localhost/Eventos_poli'

app.use(CityRouter)
app.use(CategoryRouter)
app.use(PlaceRouter)
app.use(CommentRouter)
app.use(PersonRouter)
app.use(EventRouter)

try {
  mongoose.connect(url)
  console.log('coneccion establecida con mongoDB')
  const PORT = 3000
  app.listen(PORT, () => {
    console.log('puerto 3000 corriendo')
  })
} catch (error) {
  console.error('Error de conexion', error)
}
