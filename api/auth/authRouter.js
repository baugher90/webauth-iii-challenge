const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const generateToken = require('../middleware/token')

const db = require('../users/usersModel');

//========================================= Register Router
router.post('/register', (req, res) => {

})

//========================================= Login Router
router.post('/login', (req, res) => {

})

//========================================= Logout Router
router.get("/logout", (req, res) => {
    
})

module.exports = router;