import { useDispatch } from "react-redux";
import { deleteScore, updateScore } from "../features/scores/scoreSlice";
import { FaRedo } from "react-icons/fa";

function ScoreItem({ score }) {
	const dispatch = useDispatch();

	return (
		<div className="score">
			{score._id}
			<div>{new Date(score.createdAt).toLocaleString("en-US")}</div>
			<h2>{score.gameType}</h2>
			<h2>{score.highScore}</h2>
			<button
				className="close"
				onClick={() => dispatch(deleteScore(score._id))}
			>
				X
			</button>
			<FaRedo
				onClick={() =>
					dispatch(
						updateScore({
							id: score._id,
							type: score.gameType,
							newScore: 200,
						})
					)
				}
			/>
		</div>
	);
}

export default ScoreItem;
