import { makePlayingMode } from '../factories/modes/playing-mode-factory.js'
import { modes } from './modes.js'

export function defineModes() {
  modes.set('playing', makePlayingMode())
}
