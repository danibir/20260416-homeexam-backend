const express = require('express')
const router = express.Router()

const con_admin = require('../controllers/con-admin')

router.post('/upload', con_admin.upload)

module.exports = router