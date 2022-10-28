//logica

import { texts } from './texts'

/**
 * The object [KEY] will be the weapon WIN
 * THe object Value will be the wepaon LOSE
 */
const winResultsStore = {
  scissors: 'paper',
  paper: 'rock',
  rock: 'scissors',
}

/**
 * Validation wepaons logic
 * If value that get the firstWepaon in the winResultsStore object is equal to secondWepaon,
 * then firstWeapon WIN
 * @param {string} firstWeapon
 * @param {string} secondWeapon
 * @returns {string} - winerWeapon
 */
export const logicBattle = (firstWeapon, secondWeapon) => {
  if (firstWeapon === secondWeapon) return texts.tie

  if (winResultsStore[firstWeapon] === secondWeapon)
    return firstWeapon // First turno Win
  else return secondWeapon // Seconda turnWin
}
