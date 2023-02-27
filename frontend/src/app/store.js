import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import scoreReducer from "../features/scores/scoreSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		scores: scoreReducer,
	},
});
