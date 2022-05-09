const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 6000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/scores', require('./routes/scoreRoutes'))
app.use('/api/scores/:id', require('./routes/scoreRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))