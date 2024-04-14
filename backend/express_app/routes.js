const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth'); // Will build authentication middleware

// Home route
router.get('/', (req, res) => {
  res.render('index.html');
});

// Dashboard route
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard.html', { user: req.user });
});

// Login route
router.post('/login', (req, res) => {
  // Handle login logic here
});

// Logout route
router.get('/logout', (req, res) => {
  // Handle logout logic here
});

module.exports = router;
