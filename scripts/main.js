gameRunning = false;

window.addEventListener('load', () => {
  const $canvas = document.querySelector('canvas');
  const game = new Game($canvas);

  const $btnStart = document.getElementById('start-button');

  $btnStart.addEventListener('click', () => {
    game.start();
  });
});
