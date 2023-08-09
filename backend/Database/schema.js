const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Schema for the collection to be store
const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
});


//hashing of user's password before saving it to the database
schema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


// Generate tokens to identify the user throughout the session
schema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch {
        console.log("error while genearting token...");
    }
}


const model = new mongoose.model('USER', schema);

module.exports = model;

