const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

connectToMongo(); //in db.js

const app = express();
const port = process.env.PORT ;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Featured stories backend');
});
app.use('/api/blogs', require('./routes/blogs')); // Correct path

app.listen(port, () => {
  console.log(`Featured stories backend listening on port ${port}`);
});
