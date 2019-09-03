const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../../models/User');
const config = require('config');

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

], async (req, res) => {
  // find the validation errors in the request and wrap them in valid object
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists!"});
    }
    user = new User({
      name,
      email,
      password
    })

    // password encryption
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // object to be sent in the token
    const payload = {
      user: {
        id: user.id
      }
    };
    // sign jwt: payload, secret, options, callback
    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 360000
    }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    })

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error!');
  }
})

module.exports = router;