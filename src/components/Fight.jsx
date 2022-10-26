import React from 'react'

export const Fight = () => (
  <>
    <div className="game-fight__user">
      <div className="game-fight__user-position" id="game-fight__user"></div>
      <p>YOU PICKED</p>
    </div>

    <div className="game-fight__fighter2">
      <div
        className="game-fight__fighter2-position"
        id="game-fight__fighter2-position"
      ></div>
      <p>THE HOUSE PICKED</p>
    </div>
  </>
)
