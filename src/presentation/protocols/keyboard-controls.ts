export interface KeyboardControls {
  getButtonPressed(): string
  isPressed(key: string): boolean
}
