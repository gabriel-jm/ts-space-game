import { KeyboardControls } from '../../presentation/protocols/index.js'
import { Singleton } from '../helpers/singleton.js'

export class WindowKeyboardControls extends Singleton implements KeyboardControls {
  private keyPressed = 'none'

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
    })
    window.addEventListener('keyup', event => {
      if (event.key === this.keyPressed) {
        this.keyPressed = 'none'
      }
    })
  }
}
