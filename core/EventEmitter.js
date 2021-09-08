export class EventEmitter {
  #listeners;

  constructor() {
    this.#listeners = new Map();
  }

  addEventListener(event, listener) {
    if (event in this.#listeners) {
      this.#listeners.get(event).add(listener);
    } else {
      this.#listeners.set(event, new Set([ listener ]));
    }
  }

  on = EventEmitter.prototype.addEventListener;

  dispatch(event, message) {
    const listeners = Array.from(this.#listeners.get(event));
    for (const listener of listeners) {
      listener(message);
    }
  }

  emit = EventEmitter.prototype.dispatch;

  removeEventListener(event, listener) {
    this.#listeners.get(event)?.delete(listener);
  }

  off = EventEmitter.prototype.removeEventListener;
}
