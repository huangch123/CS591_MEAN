const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:4200' }),
  (req, res)=> {
    res.redirect('http://localhost:4200/profile');
  });

module.exports = router;
