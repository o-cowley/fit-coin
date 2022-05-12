const asyncHandler = require('express-async-handler')

const Score = require('../models/scoresModel')


const getScores = asyncHandler(async (req, res) => {
    const scores = await Score.find()


    res.status(200).json(scores)
})

const setScores = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Set scores" })
})

const updateScore = asyncHandler(async (req, res) => {

    res.status(200).json({ message: `Updated score ${req.params.id}` })
})

const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Deleted id ${req.params.id}` })
})


module.exports = {
    getScores,
    setScores,
    updateScore,
    deleteUser,
}