import { GameMode } from '../../presentation/protocols/game-mode.js'

export const modes: Map<string, GameMode> = new Map()

export let currentMode: GameMode = {
  update(){},
  draw(){}
}

export const setCurrentMode = (mode: GameMode) => currentMode = mode
