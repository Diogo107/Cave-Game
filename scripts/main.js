window.addEventListener('load', () => {
  const $canvas = document.querySelector('canvas');
  const game = new Game($canvas);

  const $btnStart = document.getElementById('start-button');
  const $btnReset = document.getElementById('reset-button');
  const $btnPause = document.getElementById('pause-button');

  $btnStart.addEventListener('click', () => {
    game.start();
  });
  $btnReset.addEventListener('click', () => {
    game.drawLost();
  });
  $btnPause.addEventListener('click', () => {
    game.pause();
  });
});
