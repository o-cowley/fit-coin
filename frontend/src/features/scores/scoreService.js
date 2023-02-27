import axios from "axios";

const API_URL = "/api/scores/";

// create a new score record
const createScore = async (scoreData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, scoreData, config);

	return response.data;
};

// get all score records
const getScores = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// Delete score record
const deleteScore = async (scoreId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + scoreId, config);

	return response.data;
};

// Update a score record
const updateScore = async (scoreData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(API_URL + scoreData.id, scoreData, config);

	return response.data;
};

const scoreService = {
	createScore,
	getScores,
	deleteScore,
	updateScore,
};

export default scoreService;
