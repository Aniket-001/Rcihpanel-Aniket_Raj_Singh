const express = require('express');
const app = new express();
app.use(express.json());

//PORT
const port = process.env.PORT || 5000;

// dotenv file
require('dotenv').config({ path: './config.env' });


//mongoose database connection
require('./Database/connection');

//Router
app.use(require('./Router/home'));
app.use(require('./Router/signup'));
app.use(require('./Router/login'));
app.use(require('./Router/logout'));

//User Model
const user = require('./Database/schema');




// Server listening
app.listen(port, () => {
    console.log(`listening to port : ${port} `)
})