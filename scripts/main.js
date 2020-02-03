const $canvas = document.querySelector('canvas');
//const context = $canvas.getContext('2d');

const game = new Game($canvas);

window.onload = function() {
  game.drawEverything();
  game.map.seeingRadius();
};
game.map.randomTable(table);
game.player.drawPlayer();
game.map.seeingRadius();

function start() {
  game.map.randomTable(table);
  game.player.drawPlayer();
  game.map.seeingRadius();
  game.zombie.drawZombie();
  var gameRunning = true;
}

function reset() {
  game.player.positionX = 0;
  game.player.positionY = 0;
  game.map.randomTable(table);
  game.player.drawPlayer();
  game.map.seeingRadius();
}

function pause() {}

//RunLogic
var gameSpeed = 1.5;
var gameRunning = true;
function loop() {
  if (gameRunning === true) {
    setTimeout(function() {
      game.zombie.setRandom1();
      game.map.paintEverything();
      game.zombie.drawZombie();
      game.player.drawPlayer();
      game.map.seeingRadius();
      if (
        game.player.positionX === game.zombie.positionX &&
        game.player.positionY === game.zombie.positionY
      ) {
        gameRunning = false;
        console.log('Ups');
      }
      loop();
    }, gameSpeed * 1000);
  } else {
  }
}

if (gameRunning === true) {
  loop();
}
