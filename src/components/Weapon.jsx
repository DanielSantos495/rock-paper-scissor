import React from 'react'

export const Weapon = ({ imageWeapon, className }) => {
  return (
    <span className={className}>
      <span className="game__box-shadow">
        <img src={imageWeapon} alt="Weapon" />
      </span>
    </span>
  )
}
