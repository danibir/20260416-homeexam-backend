const Fox = require('../models/mod-fox')

const upload = async (req, res) => {
    console.log(req.body)
    const obj = {
        imageLink: String(Math.random())
    }
    const newfox = Fox(obj)
    await newfox.save()
    res.json({ result: "success" })
}

module.exports = {
    upload
}