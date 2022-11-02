import React from 'react'

export const Weapon = ({
  weaponImage,
  weaponName,
  className,
  captureWeapon,
}) => {
  return (
    <span
      className={className}
      data-weapon={weaponName}
      onClick={captureWeapon}
    >
      <span className="game__box-shadow">
        <img src={weaponImage} alt="Weapon" />
      </span>
    </span>
  )
}
