const router = require('express').Router();
const User = require('../models/user.model');
const CryptoJS = require('crypto-js');

//register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt("Message"),
    });
    try {
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
       res.status(500).json(error); 
    }
})

module.exports = router;