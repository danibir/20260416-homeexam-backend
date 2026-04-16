//variables

const express = require('express')
const morgan = require('morgan')
const os = require('os')

const router_main = require('./routers/rou-main')

const app = express()

//config

app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//server start

app.use('/', router_main)

app.listen(4000, () => {
        console.log('Server is running on port 4000 and on', os.hostname())
    })