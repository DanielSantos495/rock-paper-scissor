import React from 'react'
import { BattleArena } from '../components/BattleArena'
import { Header } from '../components/Header'
import { Rules } from '../components/Rules'

export const App = () => (
  <div className="body">
    <Header />
    <BattleArena />
    <Rules />
  </div>
)
