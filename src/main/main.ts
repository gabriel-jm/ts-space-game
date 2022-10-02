import './render-context.js'
import '../infra/assets/sprites/index.js'
import { currentMode } from './modes/modes.js'
import { changeMode } from './modes/change-mode.js'
import { defineModes } from './modes/define-modes.js'

function loop() {
  requestAnimationFrame(loop)
  currentMode.update()
  currentMode.draw()
}

defineModes()
changeMode('playing')
loop()
