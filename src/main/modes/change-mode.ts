import { modes, setCurrentMode } from './modes.js'

export function changeMode(modeName: string) {
  if (!modes.has(modeName)) {
    throw new Error('Mode not implemented: ' + modeName)
  }

  setCurrentMode(modes.get(modeName)!)
}
