const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../../middleware/auth');

const User = require('../../../models/User');

// @route   GET api/v1/auth
// @desc    Get logged-in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
})

// @route   POST api/v1/auth
// @desc    Authenticate the user and get token
// @access  Public
router.post("/", [
  check('email', 'Please include a valid email!').isEmail(),
  check('password', 'Please enter password!').exists()
], async (req, res) => { 
  // find the validation errors in the request and wrap them in valid object
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials!"});
    }

    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }
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
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error!');
  }
})

module.exports = router;