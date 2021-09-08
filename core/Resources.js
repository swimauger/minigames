export class Resources {
  static #sources = {};

  static load() {
    const promises = [];

    for (const id in Resources.#sources) {
      promises.push(new Promise(resolve => {
        Resources.#sources[id].image.onload = resolve;
      }));
      Resources.#sources[id].image.src = Resources.#sources[id].src;
    }

    return Promise.all(promises);
  }

  static register(resource) {
    for (const id in resource) {
      Resources.#sources[id] = {
        image: new Image(),
        src: resource[id].source,
        meta: resource[id].metadata
      }
    }
  }

  static get(id) {
    return Resources.#sources[id];
  }
}
