export class KeyRegistry {
  static #listeners = {
    keydown: {},
    keypress: {},
    keyup: {}
  };
  static #onInit = (() => {
    window.addEventListener('keydown', KeyRegistry.#onKeyDown);
    window.addEventListener('keypress', KeyRegistry.#onKeyPress);
    window.addEventListener('keyup', KeyRegistry.#onKeyUp);
  })();

  static #onKeyDown(event) {
    for (const listener of KeyRegistry.#listeners.keydown[event.key]) {
      listener(event);
    }
  }

  static #onKeyPress(event) {
    for (const listener of KeyRegistry.#listeners.keypress[event.key]) {
      listener(event);
    }
  }

  static #onKeyUp(event) {
    for (const listener of KeyRegistry.#listeners.keyup[event.key]) {
      listener(event);
    }
  }

  static register(registration, listener) {
    const [ keyEvent, key ] = registration.split(':');
    switch (keyEvent) {
      case 'keydown':
        if (key in KeyRegistry.#listeners.keydown) {
          KeyRegistry.#listeners.keydown[key].push(listener);
        } else {
          KeyRegistry.#listeners.keydown[key] = [ listener ];
        } 
        break;
      case 'keypress':
        if (key in KeyRegistry.#listeners.keypress) {
          KeyRegistry.#listeners.keypress[key].push(listener);
        } else {
          KeyRegistry.#listeners.keypress[key] = [ listener ];
        } 
        break;
      case 'keyup':
        if (key in KeyRegistry.#listeners.keyup) {
          KeyRegistry.#listeners.keyup[key].push(listener);
        } else {
          KeyRegistry.#listeners.keyup[key] = [ listener ];
        } 
        break;
    }
  }
}
