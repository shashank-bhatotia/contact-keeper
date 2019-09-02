const express = require('express');

const router = express.Router();

// @route   GET api/v1/auth
// @desc    Get logged-in user
// @access  Private
router.get("/", (req, res) => {
  res.send('Get logged-in user');
})

// @route   POST api/v1/auth
// @desc    Authenticate the user and get token
// @access  Public
router.post("/", (req, res) => {
  res.json({
    msg: "Log in user"
  });
})

module.exports = router;