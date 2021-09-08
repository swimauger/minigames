export class Timer extends EventEmitter {
  #timer;

  constructor() {
    super();
    this.#timer = new Worker(`${location.origin}/core/timer.worker.js`);
    this.#timer.addEventListener('message', event => {
      const milliseconds = event.data;
      this.emit('update', milliseconds);
    });
  }

  start() {
    this.#timer.postMessage("START");
  }

  stop() {
    this.#timer.postMessage("STOP");
  }

  reset() {
    this.#timer.postMessage("RESET");
  }
}
