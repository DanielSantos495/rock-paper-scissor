import React from 'react'

import { RestartGame } from './RestartGame'
import { Score } from './Score'

export const Header = () => (
  <header className="header">
    <ul>
      <li>CHIN</li>
      <li>BUN</li>
      <li>PAPAS</li>
    </ul>

    <RestartGame />
    <Score score="0" />
  </header>
)
