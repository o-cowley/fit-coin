import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ScoreForm from "../components/ScoreForm";
import Spinner from "../components/Spinner";
import { getScores, reset } from "../features/scores/scoreSlice";
import ScoreItem from "../components/ScoreItem";

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { scores, isLoading, isError, message } = useSelector(
		(state) => state.scores
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (!user) {
			navigate("/login");
		}

		dispatch(getScores());

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className="heading">
				<h1>Welcome {user && user.name}</h1>
				<p>Scores Dashboard</p>
			</section>
			<ScoreForm />

			<section className="content">
				{scores.length > 0 ? (
					<div className="scores">
						{scores.map((score) => {
							return <ScoreItem key={score._id} score={score} />;
						})}
					</div>
				) : (
					<h3>You have not set any scores</h3>
				)}
			</section>
		</>
	);
}

export default Dashboard;
