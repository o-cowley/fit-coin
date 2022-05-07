import React from 'react'

const ScoreDisplay = ( {game, score}) => {
  return (
    <div>{game}: {score}</div>
  )
}

export default ScoreDisplay