//---database connection-----

const Db = process.env.DATABASE;
const mongoose = require('mongoose');


mongoose.connect(Db).then(() => {
    console.log("succesfully connected to the database.. ")
}).catch((err) => {
    console.log("error");
})
