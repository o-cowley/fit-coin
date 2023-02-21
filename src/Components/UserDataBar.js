import React from 'react'
import ScoreDisplay from './ScoreDisplay'
import logo from "../Images/logo.svg"

const UserDataBar = ({ name, score, currentScore }) => {

    return (
        <div className="right-bar">
            <div className="coin-display">
                <img src={logo} alt='Currently the react logo'/>
                <p>Current Game</p>
                <p>The current score is:</p>
                <p>{currentScore}</p>
            </div>
            <div className="name">Player: {name}</div>
            <div className="score">
                {score.map((game, idx) => (
                    <ScoreDisplay key={idx} game={game.name} score={game.score} />
                ))}

            </div>
        </div>
    )
}

export default UserDataBar