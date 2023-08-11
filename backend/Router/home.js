// Home Page

const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');

router.get("/", authentication , (req, res) => {
    res.send(req.rootuser);
});

module.exports = router;