export class Singleton {
  protected static instance: Singleton

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this
    }

    return Singleton.instance
  }
}
