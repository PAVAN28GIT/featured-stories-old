const connectToMongo = require('./db');

const express = require('express')
var cors = require('cors') //Middleware which allows your frontend application to make requests to your backend from a different origin.
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

connectToMongo(); // in db.js

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Featured stories backend')
})
app.use('/api/blogs', require('./routes/blogs'))
// This line tells Express to use the routes defined in ./routes/blogs.js whenever the /api/blogs path is requested.

app.listen(port, () => {
  console.log(`Featured stories backend listening on port ${port}`)
})