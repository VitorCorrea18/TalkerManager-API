const express = require('express');
const { validateEmail, validatePwd, login } = require('./login');
const {
  getTalkers,
  getTalkerById,
  authenticateToken,
  addTalker,
} = require('./talkers');


const router = express.Router();

router.get('/talker', getTalkers);
router.get('/talker/:id', getTalkerById);
router.post('/login', validateEmail, validatePwd, login);
router.post('/talker', authenticateToken, addTalker);

module.exports = router;
