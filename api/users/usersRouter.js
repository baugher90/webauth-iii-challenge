const router = require('express').Router();
const db = require('./usersModel');
const restricted = require('../middleware/restricted');
const check = require('../middleware/check');


// router.get('/employee', restricted, check.Department('Sales'), (req, res) => {
//   db.findDep()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });


router.get('/Sales', restricted, check.Role('Manager'), (req, res) => {
  db.findRole()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/HR', restricted, check.check('HR', 'Admin'), (req, res) => {
  db.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
