


const express = require('express');
const app = express();

//dotenv
require('dotenv').config()
// conectDB
const db = require('./config/db')
db.connect();


//define routes
const authroutes = require('./routes/auth')
app.use('/api/v1/auth', authroutes)

const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server is running on port${port}`);
})