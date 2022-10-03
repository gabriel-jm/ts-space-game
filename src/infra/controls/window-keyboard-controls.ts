import { KeyboardControls } from '../../presentation/protocols/index.js'
import { Singleton } from '../helpers/singleton.js'

export class WindowKeyboardControls extends Singleton implements KeyboardControls {
  private keyPressed = 'none'
  private keysPressed: Set<string> = new Set()

  constructor() {
    super()
    this.init()
  }

  getButtonPressed(): string {
    return this.keyPressed
  }

  init() {
    window.addEventListener('keydown', event => {
      this.keyPressed = event.key
      this.keysPressed.add(event.key)
    })
    window.addEventListener('keyup', event => {
      if (event.key === this.keyPressed) {
        this.keyPressed = 'none'
      }

      if (this.keysPressed.has(event.key)) {
        this.keysPressed.delete(event.key)
      }
    })
  }

  isPressed(key: string): boolean {
    return this.keysPressed.has(key)
  }
}
