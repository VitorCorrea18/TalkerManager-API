const express = require('express');

const router = express.Router();
const { getTalkers, getTalkerById } = require('./talkers');

router.get('/talker', getTalkers);
router.get('/talker/:id', getTalkerById)

module.exports = router;
