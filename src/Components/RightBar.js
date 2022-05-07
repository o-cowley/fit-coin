import React from 'react'
import ScoreDisplay from './ScoreDisplay'

const RightBar = ({ name, score }) => {



    return (
        <div className="right-bar">
            <div className="coin-display">I WOULD BE A COIN TYPE</div>
            <div className="name">Player: {name}</div>
            <div className="score">
                {score.map((game) => (
                    <ScoreDisplay game={game.name} score={game.score} />
                ))}

            </div>
        </div>
    )
}

export default RightBar