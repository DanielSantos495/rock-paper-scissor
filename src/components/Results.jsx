import React from 'react'

export const Results = ({ winOrLose }) => (
  <span className="game-results" id="game-results">
    <span className="game-results__message">{winOrLose}</span>
    <span className="game-play-again" id="play-again">
      PLAY AGAIN
    </span>
  </span>
)
