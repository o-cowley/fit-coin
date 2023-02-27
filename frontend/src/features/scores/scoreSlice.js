import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import scoreService from "./scoreService";

const initialState = {
	scores: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const scoreSlice = createSlice({
	name: "score",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createScore.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createScore.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.scores.push(action.payload);
			})
			.addCase(createScore.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getScores.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getScores.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.scores = action.payload;
			})
			.addCase(getScores.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteScore.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteScore.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.scores = state.scores.filter(
					(score) => score._id !== action.payload.id
				);
			})
			.addCase(deleteScore.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(updateScore.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateScore.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.scores = state.scores.map((e) => {
					if (e._id === action.payload._id) {
						return { ...e, highScore: action.payload.highScore };
					}
					return e;
				});
			})
			.addCase(updateScore.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

// create new score record
export const createScore = createAsyncThunk(
	"score/create",
	async (scoreData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await scoreService.createScore(scoreData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get all of the scores
export const getScores = createAsyncThunk(
	"score/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await scoreService.getScores(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Delete score record
export const deleteScore = createAsyncThunk(
	"score/delete",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await scoreService.deleteScore(id, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Update a score
export const updateScore = createAsyncThunk(
	"score/update",
	async (scoreData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await scoreService.updateScore(scoreData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const { reset } = scoreSlice.actions;

export default scoreSlice.reducer;
