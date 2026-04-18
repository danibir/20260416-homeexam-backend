const Fox = require('../models/mod-fox')

const config = require('../config')

const getConfig = (req, res) => {
    res.json(config)
}
const getAll = async (req, res) => {
    const rawfoxes = await Fox.find()
    return res.json(rawfoxes)
}
const getRandomFoxes = async (req, res) => {
    const rawfoxes = await Fox.find()
    const shuffledfoxes = rawfoxes.sort(() => 0.5 - Math.random())
    const foxes = shuffledfoxes.slice(0, config.voteSize)
    return res.json(foxes)
}
const applyVote = async (req, res) => {
    const vote = req.body.vote
    const updatedFox = await Fox.findByIdAndUpdate(
            vote,
            { $inc: { votes: 1 } },
            { new: true }
        )
    res.json({ success: true })
}

module.exports = {
    getAll,
    getConfig,
    getRandomFoxes,
    applyVote
}