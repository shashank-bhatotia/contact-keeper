const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const User = require('../../../models/User');
const Contact = require('../../../models/Contact');
const auth = require('../../../middleware/auth');

// @route   GET api/v1/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    // we have access to req.user.id from the auth middleware
    // we want the contacts listed against a specific user id
    // sort({ date: -1 }) will bring the most recent contact on the top
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route   POST api/v1/contacts/
// @desc    Add new contact
// @access  Private
router.post("/", [ auth, [
  check('name', 'Please add name!').not().isEmpty()
] ], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, type } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      // we have access to user from the auth middleware
      user: req.user.id
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
})

// @route   PUT api/v1/contacts/:id
// @desc    Update a contact
// @access  Private
router.put("/:id", auth, (req, res) => {

});

// @route   DELETE api/v1/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete("/:id", auth, (req, res) => {
  
})



module.exports = router;