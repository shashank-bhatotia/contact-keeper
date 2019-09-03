const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const User = require('../../../models/User');

// @route   POST api/v1/users
// @desc    User registeration
// @access  Public

router.post("/", [

  // name must not be empty
  check('name', 'Please add name').not().isEmpty(),
  // email must be an email
  check('email', 'Please include a valid email').isEmail(),
  // password is 6 chars long
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })

], (req, res) => {

  // find the validation errors in the request and wrap them in valid object
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => res.json(user));
})

module.exports = router;