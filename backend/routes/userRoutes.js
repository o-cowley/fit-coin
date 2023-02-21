const express = require('express')
const router = express.Router()
const { getMe, registerUser, loginUser } = require('../controllers/userController')
const { protect } = require('../middleware/authmiddleware')

// The above covers both of these
// router.get('/', getUsers)
// router.post('/', addUser)
router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/me', protect, getMe)


//  OLD CODE
// router.get('/', getScores).post('/', setScores)
// router.put('/:id', updateScore).delete('/:id', deleteUser)

module.exports = router