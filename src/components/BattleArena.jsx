import React, { useEffect, useState } from 'react'
import { logicBattle } from '../utils/logicBattle'
import { Fight } from './Fight'
import { Results } from './Results'
import { Weapon } from './Weapon'

export const BattleArena = () => {
  const [weaponUsed, setWeaponUsed] = useState([])

  const captureWeapon = (e) => {
    setWeaponUsed([...weaponUsed, e.target.dataset.weapon])
  }

  const onFight = () => {
    if (weaponUsed.length === 2) {
      const fightResult = logicBattle(weaponUsed[0], weaponUsed[1])
      setWeaponUsed([])

      return fightResult
    }
  }

  useEffect(() => {
    const win = onFight()
    console.log(win)
  }, [weaponUsed])

  return (
    <div className="game__table" id="game__table">
      <div className="game" id="game">
        <Weapon
          className="game__paper"
          weaponImage="https://i.imgur.com/gTRA5qF.png"
          weaponName="paper"
          captureWeapon={captureWeapon}
        />
        <Weapon
          className="game__scissors"
          weaponImage="https://i.imgur.com/smN2bE5.png"
          weaponName="scissors"
          captureWeapon={captureWeapon}
        />
        <Weapon
          className="game__rock"
          weaponImage="https://i.imgur.com/qRF9592.png"
          weaponName="rock"
          captureWeapon={captureWeapon}
        />
      </div>

      <Fight />
      <Results />
    </div>
  )
}
