export class Render {
  static #renderCallbacks = [];
  static #asyncRenderCallbacks = [];
  static #pendingAsyncCallbacks = new Set();

  static #onInit = (() => {
    Render.#nextFrame();
  })();

  static #nextFrame() {
    for (const renderCallback of Render.#renderCallbacks) {
      renderCallback();
    }

    for (const asyncRenderCallback of Render.#asyncRenderCallbacks) {
      Render.#pendingAsyncCallbacks.add(asyncRenderCallback);
      asyncRenderCallback().then(() => {
        Render.#pendingAsyncCallbacks.delete(asyncRenderCallback);
      });
    }
    
    requestAnimationFrame(Render.nextFrame);
  }

  static register(renderCallback, isAsync = false) {
    if (isAsync) {
      Render.#asyncRenderCallbacks.push(renderCallback);
    } else {
      Render.#renderCallbacks.push(renderCallback);
    }
  }
}
