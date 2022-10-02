export interface Ship {
  get x(): number
  get y(): number
  moveUp(): void
  moveDown(): void
  moveLeft(): void
  moveRight(): void
}

export class ShipDO implements Ship {
  static #instance: ShipDO
  #sizes!: { screenWidth: number, screenHeight: number }
  #x = 0
  #y = 0
  #width = 8

  constructor(sizes: { screenWidth: number, screenHeight: number }) {
    if(!ShipDO.#instance) {
      this.#sizes = sizes
      ShipDO.#instance = this
    }

    return ShipDO.#instance
  }

  get x() {
    return this.#x
  }

  get y() {
    return this.#y
  }

  moveUp(): void {
    this.#y = Math.max(0, this.#y-1)
  }
  
  moveDown(): void {
    if (this.#sizes.screenHeight < this.#y + this.#width + 1) {
      this.#y = this.#sizes.screenHeight - this.#width
    } else {
      this.#y++
    }
  }
  
  moveLeft(): void {
    this.#x = Math.max(0, this.#x-1)
  }

  moveRight(): void {
    if (this.#sizes.screenWidth < this.#x + this.#width + 1) {
      this.#x = this.#sizes.screenWidth - this.#width
    } else {
      this.#x++
    }
  }
}
