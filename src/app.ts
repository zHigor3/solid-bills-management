import express from 'express'
import userRoutes from './routes/userRoutes'
import billRoutes from './routes/billRoutes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', billRoutes)

export default app
