import { Ship } from '../../domain/data-owners/index.js'
import { Drawer, GameMode, KeyboardControls } from '../protocols/index.js'

export class PlayingMode implements GameMode {
  #actionByKey: Record<string, () => void>
  
  constructor(
    private readonly drawer: Drawer,
    private readonly controls: KeyboardControls,
    private readonly ship: Ship
  ) {
    this.#actionByKey = {
      ArrowUp: () => this.ship.moveUp(),
      ArrowDown: () => this.ship.moveDown(),
      ArrowLeft: () => this.ship.moveLeft(),
      ArrowRight: () => this.ship.moveRight()
    }
  }
  
  update(): void {
    const key = this.controls.getButtonPressed()

    if (key in this.#actionByKey) {
      this.#actionByKey[key]()
    }
  }

  draw(): void {
    this.drawer.clear()
    this.drawer.sprite('ship', this.ship.x, this.ship.y)
  }
}
