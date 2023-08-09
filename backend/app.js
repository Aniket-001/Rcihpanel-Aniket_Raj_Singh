const express = require('express');
const app = new express();
app.use(express.json());

//PORT
const port = process.env.PORT || 3000;

// dotenv file
require('dotenv').config({ path: './config.env' });


//mongoose database connection
require('./Database/connection');

//Router
app.use(require('./Router/authentication'));

//User Model
const user = require('./Database/schema');




// Server listening
app.listen(port, () => {
    console.log(`listening to port : ${port} `)
})