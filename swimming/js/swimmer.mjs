import { Resources, Render } from "../../core";

Resources.register({
  butterfly: {
    source: '/swimming/assets/png/butterfly.png',
    metadata: {
      width: 800,
      height: 418,
      frames: 58
    }
  },
  backstroke: {
    source: '/swimming/assets/png/backstroke.png',
    metadata: {
      width: 800,
      height: 418,
      frames: 58
    }
  },
  breaststroke: {
    source: '/swimming/assets/png/breaststroke.png',
    metadata: {
      width: 800,
      height: 418,
      frames: 58
    }
  },
  freestyle: {
    source: '/swimming/assets/png/freestyle.png',
    metadata: {
      width: 800,
      height: 418,
      frames: 58
    }
  }
});

class Swimmer {
  static #element = document.querySelector('canvas.swimmer');
  static #ctx = Swimmer.#element.getContext('2d');
  static #butterfly = Resources.get('butterfly');

  static render() {
    Swimmer.#element.width = Swimmer.#butterfly.meta.width;
    Swimmer.#element.height = Swimmer.#butterfly.meta.height;

    Swimmer.#element.imageSmoothingEnabled = true;
    Swimmer.#element.imageSmoothingQuality = 'high';

    Swimmer.#ctx.clearRect(0, 0, Swimmer.#element.width, Swimmer.#element.height);
    Swimmer.#ctx.drawImage(
      Swimmer.#butterfly.image,
      0, 0,
      Swimmer.#butterfly.image.width, Swimmer.#butterfly.image.height
    );
  }
}

Resources.load().then(() => void Render.register(Swimmer.render));
