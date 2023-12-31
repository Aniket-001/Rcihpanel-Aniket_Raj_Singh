// User Login

const express = require('express');
const router = express.Router();
const user = require('../Database/schema');
const bcrypt = require('bcryptjs');

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password){
            return res.status(422).json({ "msg": "Please fill the details" });
        }

        const userexist = await user.findOne({ email });

        if (!userexist){
            return res.status(422).json({ "msg": "No user found" });
        }

        const result = await bcrypt.compare(password, userexist.password);
        if (!result){
            return res.status(422).json({ "msg": "Email or password didn't match" });
        }

        const token = userexist.generateToken();
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 864000000),
            httpOnly: true
        });
        
        return res.status(201).json({ "msg": "U are logged in" });
    }
    catch (err) {
        console.log("Oops can't able to find this user..");
    }
});


module.exports = router;