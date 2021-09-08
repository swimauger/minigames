import { Timer } from '../../core';

const clock = new Timer();
const $clock = document.querySelector('label.clock');

clock.on('update', milliseconds => {
  $clock.textContent = (milliseconds/1000).toFixed(2);
});
