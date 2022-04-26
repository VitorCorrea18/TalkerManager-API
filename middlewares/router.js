const express = require('express');
const { login } = require('./login');
const { getTalkers, getTalkerById } = require('./talkers');

const router = express.Router();

router.get('/talker', getTalkers);
router.get('/talker/:id', getTalkerById);
router.post('/login', login);

module.exports = router;
