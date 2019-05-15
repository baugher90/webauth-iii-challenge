const router = require('express').Router();
const db = require('./usersModel');
const restricted = require('../middleware/restricted');
const check = require('../middleware/check');

router.get('/department', restricted, check.Department('Sales'), (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/role', restricted, check.Role('Guy'), (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/admin', restricted, check.Role('Guy'), check.Department('Sales'), (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
