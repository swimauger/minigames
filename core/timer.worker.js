let clock = null;
let stopped = false;
let startTime = 0;
let updatedTime = 0;

addEventListener('message', event => {
  const command = event.data;

  switch (command) {
    case 'START':
      startTime = new Date().getTime();
      if (stopped) startTime -= updatedTime;

      clock = setInterval(() => {
        postMessage(updatedTime = new Date().getTime() - startTime);
      });
      break;
    case 'STOP':
      clearInterval(clock);
      stopped = true;
      break;
    case 'RESET':
      clearInterval(clock);
      stopped = false;
      postMessage(0);
      break;
  }
});
