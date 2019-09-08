const express = require('express');
const router = express.Router();
const passport = require('passport');

//@route       GET /auth/google
//@desc        google auth
//@access      public
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.send('done');
});

//@route       GET /auth/local
//@desc        local auth
//@access      public
router.get('/local', passport.authenticate('local'), (req, res) => {
  res.send('done');
});

module.exports = router;
