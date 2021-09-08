const Speed = {
  STOP: 0,
  SLOW: 1,
  PACE: 2,
  FAST: 3,
  SPRINT: 4,
  PHELPS: 5
};

const speedNames = Object.keys(Speed);
const $speedName = document.querySelector('span.speed-name');
