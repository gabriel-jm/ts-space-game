import { Drawer } from '../../presentation/protocols/drawer.js'
import { spritesMap } from '../assets/sprites/sprites-map.js'
import { Sizes } from './constants/index.js'
import { SpriteArrayDrawer } from './drawing.js'

export class CanvasDrawer implements Drawer {
  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly spriteArrayDrawer: SpriteArrayDrawer
  ) {}
  
  clear(): void {
    this.ctx.clearRect(0, 0, Sizes.screenWidth, Sizes.screenHeight)
  }

  sprite(spriteId: string, x: number, y: number): void {
    const spriteArray = spritesMap.get(spriteId)

    if (spriteArray) {
      this.spriteArrayDrawer(spriteArray, x, y)
    }
  }
}
