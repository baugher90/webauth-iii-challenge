const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({message:`Sorry you can't do that!`})
      } else {
        req.decodedJWT = decodedToken;
        console.log('decoded token', req.decodedJWT);
        next();
      }
    })
  } else {
    res.status(401).json({message: `Sorry you can't do that!`})
  }
}