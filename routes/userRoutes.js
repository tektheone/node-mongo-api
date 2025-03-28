const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const router = express.Router();

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  // Ckech if the provided ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Invalid user ID format'});
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
})

module.exports = router;