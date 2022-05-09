const express = require('express')
const router = express.Router()
const { getScores, setScores, deleteUser, updateScore } = require('../controllers/scoreController')

router.get('/', getScores).post('/', setScores)
router.put('/:id', updateScore).delete('/:id', deleteUser)

module.exports = router