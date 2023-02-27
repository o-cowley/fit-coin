const express = require("express");
const router = express.Router();
const {
	getHighscores,
	addHighscore,
	updateHighscore,
	deleteScore,
} = require("../controllers/scoreController");
const { protect } = require("../middleware/authMiddleware");

// The above covers both of these
// router.get('/', getUsers)
// router.post('/', addUser)
router.route("/").get(protect, getHighscores).post(protect, addHighscore);

// Covers both of these routes since they use the same route
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)
router.route("/:id").put(protect, updateHighscore).delete(protect, deleteScore);

//  OLD CODE
// router.get('/', getScores).post('/', setScores)
// router.put('/:id', updateScore).delete('/:id', deleteUser)

module.exports = router;
