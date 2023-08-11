//registeration of the user

const express = require('express');
const router = express.Router();
const user = require('../Database/schema');



router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userexist = await user.findOne({ email });

        if (userexist){
            return res.status(422).json({ "msg": "email alredy exist" });
        }

        const data = new user({ name, email, password });
        await data.save();

        res.status(201).json({ "msg": "thank U" });
    }
    catch (err) {
        console.log("Oops can't able to add this user.." + err);
    }
});


module.exports = router;


