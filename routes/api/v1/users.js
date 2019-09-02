const express = require('express');

const router = express.Router();

// @route   POST api/v1/users
// @desc    User registeration
// @access  Public
router.post("/", (req, res) => {
  res.send('Register a user!');
})

module.exports = router;