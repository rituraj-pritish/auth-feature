const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../config/keys')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const chalk = require('chalk')

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

router.get('/current_user', (req,res) => {
  res.send(req.user);
})

router.post('/login', passport.authenticate('local'), (req,res) => {
  console.log(chalk.green(req.user));
  console.log(chalk.green('success'));
  res.send(done);
})

//@route         /auth/users
//@description   register user
//@access        Public

router.post(
  '/register',
  [
    check('name', 'Name is require')
      .not()
      .isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //see if us er exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }


      user = new User({
        name,
        email,
        password
      });

      //encrypt password
      const salt = await bcrypt.genSalt(10); // the more the more secure
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // //return jsonwebtoken
      // const payload = {
      //   user: {
      //     // this id is the mongo user id
      //     id: user.id
      //   }
      // };

      // jwt.sign(
      //   payload,
      //   keys.jwtSecret,
      //   { expiresIn: 360000 },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ token });
      //   }
      // );
      return res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
