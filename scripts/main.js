const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

var gameRunning = false;
window.onload = function() {
  game.map.selectTable();
  game.map.selectTable();
  game.drawEverything();
  game.map.seeingRadius();
  game.player.drawPlayer();
  game.audio.play();
  game.zombie.positionX = game.zombie.xPosition();
  game.zombie.positionY = game.zombie.yPosition();
};
