const express = require('express');

const router = express.Router();
const { getTalkers } = require('./middlewares/talkers');

router.get('/talker', getTalkers);

module.exports = router;
