import mongoose from 'mongoose'
import express from 'express'
import { CityRouter } from './routes/city.routes.js'
import { PlaceRouter } from './routes/place.routes.js'

const app = express()
app.use(express.json())
const url = 'mongodb://localhost/Eventos_poli'

app.use(CityRouter)
app.use(PlaceRouter)

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
