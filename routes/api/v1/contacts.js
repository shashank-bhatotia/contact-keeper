const express = require('express');

const router = express.Router();

// @route   GET api/v1/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send('Get all contacts!');
});

// @route   POST api/v1/contacts/
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.json({msg: "Add contact"});
})

// @route   PUT api/v1/contacts/:id
// @desc    Update a contact
// @access  Private
router.put("/:id", (req, res) => {
  res.json({msg: "Update contact"});
});

// @route   DELETE api/v1/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.json({msg: "Delete contact"});
})



module.exports = router;