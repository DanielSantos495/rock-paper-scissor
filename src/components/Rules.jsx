import React from 'react'

export const Rules = () => (
  <>
    <button className="rules__button" id="rules__button">
      RULES
    </button>

    <div className="rules__overlay " id="rules__overlay">
      <div className="rules__modal " id="rules__modal">
        <p>RULES</p>

        <img src="https://i.imgur.com/q2AQANQ.png" alt="Image rules" />

        <span id="rules__close">
          <img src="https://i.imgur.com/9TftIVM.png" alt="Icon close" />
        </span>
      </div>
    </div>
  </>
)
