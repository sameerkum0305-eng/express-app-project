const express = require('express');
const router = express.Router();

// Route for /users
router.get('/', (req, res) => {
  res.send('Users Page');
});

// Route for /users/new
router.get('/new', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
