import React from 'react'
import { Fight } from './Fight'
import { Results } from './Results'
import { Weapon } from './Weapon'

export const BattleArena = () => (
  <div className="game__table" id="game__table">
    <div className="game" id="game">
      <Weapon
        className="game__paper"
        imageWeapon="https://i.imgur.com/gTRA5qF.png"
      />
      <Weapon
        className="game__scissors"
        imageWeapon="https://i.imgur.com/smN2bE5.png"
      />
      <Weapon
        className="game__rock"
        imageWeapon="https://i.imgur.com/qRF9592.png"
      />
    </div>

    <Fight />
    <Results />
  </div>
)
