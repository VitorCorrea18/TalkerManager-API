const express = require('express');
const { validateEmail, validatePwd, login } = require('./login');
const { getTalkers, getTalkerById } = require('./talkers');

const router = express.Router();

router.get('/talker', getTalkers);
router.get('/talker/:id', getTalkerById);
router.post('/login', validateEmail, validatePwd, login);

module.exports = router;
