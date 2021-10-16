

//dotenv
require('dotenv').config()
// conectDB
// const {connectDB} = require('./config/db')
const db = require('./config/db')
db.connect();

const express = require('express');
const app = express();



app.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: { data: 'ok 111w man' }
    })
})


const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server is running on port${port}`);
})