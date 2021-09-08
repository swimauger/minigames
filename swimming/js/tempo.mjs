import { KeyRegistry, Render } from "../../core";

class Tempo {
  static #direction = Direction.RIGHT;
  static #speed = Speed.STOP;
  static #tempoElement = document.querySelector('input.tempo');

  static faster() {
    if (Tempo.#speed < Speed.PHELPS) {
      Tempo.#speed++;
      $speedName.textContent = speedNames[Tempo.#speed];
    }
  }

  static slower() {
    if (Tempo.#speed > Speed.STOP) {
      Tempo.#speed--;
      $speedName.textContent = speedNames[Tempo.#speed];
    }
  }

  static render() {
    const strokePosition = parseInt(Tempo.#tempoElement.value);

    if (strokePosition <= 1) {
      Tempo.#direction = Direction.RIGHT;
    } else if (strokePosition >= 100) {
      Tempo.#direction = Direction.LEFT;
    }

    switch (Tempo.#direction) {
      case Direction.LEFT:
        Tempo.#tempoElement.value = strokePosition - Tempo.#speed;
        break;
      case Direction.RIGHT:
        Tempo.#tempoElement.value = strokePosition + Tempo.#speed;
        break;
    }
  }
}

KeyRegistry.register('keydown:ArrowUp', Tempo.faster);
KeyRegistry.register('keydown:ArrowDown', Tempo.slower);

Render.register(Tempo.render);
