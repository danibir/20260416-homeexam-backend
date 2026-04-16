const express = require('express')
const router = express.Router()

const con_main = require('../controllers/con-main')

router.get('/config', con_main.getConfig)
router.get('/', con_main.getAll)
router.get('/foxesForVote', con_main.getRandomFoxes)
router.post('/voteApply', con_main.applyVote)

module.exports = router