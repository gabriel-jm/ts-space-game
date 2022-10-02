import { COLORS } from './constants/colors.js'

export interface PixelDrawer {
  (x: number, y: number, color: number): void
}

export function pixel(ctx: CanvasRenderingContext2D) {
  return (x: number, y: number, color = 0) => {
    ctx.fillStyle = COLORS[color]
    ctx.fillRect(x, y, 1, 1)
  }
}

export interface SpriteArrayDrawer {
  (sprArray: Array<number[]>, x: number, y: number): void
}

export function spriteArray(pixel: PixelDrawer) {
  return (sprArray: Array<number[]>, x: number, y: number) => {
    for (const lineIndex in sprArray) {
      const line = sprArray[lineIndex]
      
      for (const pixelIndex in line) {
        const pixelColor = line[pixelIndex]
        
        pixel(
          x + Number(pixelIndex),
          y + Number(lineIndex),
          pixelColor
        )
      }
    }
  }
}
