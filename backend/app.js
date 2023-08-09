const express = require('express');
const app = new express();

require('dotenv').config({path:'./config.env'});

const port = process.env.PORT||3000;
const Db = process.env.DATABASE;

const mongoose = require('mongoose');
mongoose.connect(Db).then(()=>{
    console.log("succesfully connected to the database.. ")
}).catch((err)=>{
    console.log("error");
})

// Server listening
app.listen(port,()=>{
    console.log(`listening to port : ${port} `)
})