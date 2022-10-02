import { ShipDO } from '../../../domain/data-owners/ship.js'
import { WindowKeyboardControls } from '../../../infra/controls/window-keyboard-controls.js'
import { CanvasDrawer } from '../../../infra/rendering/canvas-drawer.js'
import { Sizes } from '../../../infra/rendering/constants/sizes.js'
import { pixel, spriteArray } from '../../../infra/rendering/drawing.js'
import { PlayingMode } from '../../../presentation/modes/playing.js'
import { ctx } from '../../render-context.js'

export function makePlayingMode() {
  const pixelDrawer = pixel(ctx)
  const spriteArrayDrawer = spriteArray(pixelDrawer)
  const drawer = new CanvasDrawer(ctx, spriteArrayDrawer)
  const keyboardControls = new WindowKeyboardControls()

  return new PlayingMode(drawer, keyboardControls, new ShipDO(Sizes))
}
