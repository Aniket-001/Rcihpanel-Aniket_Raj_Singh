const express = require('express');
const router = express.Router();

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("User logout");
})


module.exports = router;