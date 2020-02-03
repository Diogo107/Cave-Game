const $canvas = document.querySelector('canvas');
//const context = $canvas.getContext('2d');

const game = new Game($canvas);

window.onload = function() {
  game.drawEverything();
};
game.map.randomTable(table);
game.player.drawPlayer();
game.map.seeingRadius();

function start() {
  game.map.randomTable(table);
  game.player.drawPlayer();
  game.map.seeingRadius();
  game.zombie.drawZombie();
}

function reset() {
  game.player.positionX = 0;
  game.player.positionY = 0;
  game.map.randomTable(table);
  game.player.drawPlayer();
  game.map.seeingRadius();
}

function pause() {}
