const router = require('express').Router();

const db = require('./usersModel');
const restricted = require('../middleware/restricted');
const check = require('../middleware/check');

router.get('/', restricted, check.Role(), check.Department(), (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
