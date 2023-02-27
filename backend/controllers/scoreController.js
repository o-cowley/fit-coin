const asyncHandler = require("express-async-handler");

const Score = require("../models/scoreModel");
const User = require("../models/userModel");

// @desc:       Get all of the users (will get specific user after authentication)
// @route:      GET /api/goals
// @access:     private (eventually)
const getHighscores = asyncHandler(async (req, res) => {
	const scores = await Score.find({ user: req.user.id });
	res.status(200).json(scores);
});

// @desc:       Add a user
// @route:      PUT /api/goals
// @access:     private (eventually)
const addHighscore = asyncHandler(async (req, res) => {
	// if (!req.body.name) {
	//     res.status(400)
	//     throw new Error('Please add a name')
	// }

	const newHighScore = await Score.create({
		user: req.user.id,
		gameType: req.body.game,
		highScore: req.body.score,
	});

	res.status(200).json(newHighScore);
});

// @desc:       Update a user
// @route:      POST /api/goals
// @access:     private (eventually)
const updateHighscore = asyncHandler(async (req, res) => {
	const score = await Score.findById(req.params.id);

	if (!score) {
		res.status(400);
		throw new Error("Score not found");
	}

	// Check if the user exists
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure that you can only update the logged in user's own things
	if (score.user.toString() != req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	const updatedScore = await Score.findByIdAndUpdate(
		req.params.id,
		{ highScore: req.body.newScore },
		{ new: true }
	);

	res.status(200).json(updatedScore);
});

// @desc:       Delete a specific user
// @route:      DELETE /api/goals
// @access:     private (eventually)
const deleteScore = asyncHandler(async (req, res) => {
	const score = await Score.findById(req.params.id);

	if (!score) {
		res.status(400);
		throw new Error("Score not found");
	}

	// Check if the user exists
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure that you can only update the logged in user's own things
	if (score.user.toString() != req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	await score.remove();
	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getHighscores,
	addHighscore,
	updateHighscore,
	deleteScore,
};
