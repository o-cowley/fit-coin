import { useState } from "react";
import { useDispatch } from "react-redux";
import { createScore } from "../features/scores/scoreSlice";

function ScoreForm() {
	const [game, setText] = useState("");
	const [score, setScore] = useState(0);

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(createScore({ game, score }));
		setText("");
		setScore(0);
	};

	return (
		<section className="form">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="game">Game</label>
					<input
						type="text"
						name="game"
						id="game"
						value={game}
						onChange={(e) => setText(e.target.value)}
					/>
					<label htmlFor="score">Score</label>
					<input
						type="number"
						name="score"
						id="score"
						value={score}
						onChange={(e) => setScore(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-block">Submit Score</button>
				</div>
			</form>
		</section>
	);
}

export default ScoreForm;
