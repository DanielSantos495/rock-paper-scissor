import React from 'react'

export const ChoiceWeapon = ({ gunName, imgGun, altName }) => {
  return (
    <span className={gunName}>
      <span className="game__box-shadow">
        <img src={imgGun} alt={altName} />
      </span>
    </span>
  )
}
