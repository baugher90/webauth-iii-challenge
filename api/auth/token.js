const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = {
    generateToken
}

function generateToken(user) {
    const payload ={
      subject: user.id,
      username: user.username,
      role: user.role,
      department: user.department
    }
    const options ={
      expiresIn: '1d',
    }
    return jwt.sign(payload, secrets.jwtSecret, options);
  }