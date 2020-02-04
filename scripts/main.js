const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

window.onload = function() {
  // game.drawEverything();
  // game.player.drawPlayer();
  // game.map.seeingRadius();
};
game.drawEverything();
game.player.drawPlayer();
game.map.seeingRadius();

function start() {
  game.player.positionX = 0;
  game.player.positionY = 0;
  game.zombie.positionX = 9;
  game.zombie.positionY = 9;
  game.drawEverything();
  game.player.drawPlayer();
  game.map.seeingRadius();
  var gameRunning = true;
}

function reset() {
  game.player.positionX = 0;
  game.player.positionY = 0;
  game.zombie.positionX = 9;
  game.zombie.positionY = 9;
  game.map.randomTable(table);
  game.player.drawPlayer();
  game.map.seeingRadius();
}

function pause() {}

//RunLogic
var gameSpeed = 2;
var gameRunning = true;
function loop() {
  game.zombie.setRandom1();
  if (gameRunning === true) {
    setTimeout(function() {
      game.map.paintEverything();
      game.player.drawPlayer();
      game.zombie.drawZombie();
      //game.map.seeingRadius();
      loop();
    }, 1000 / gameSpeed);
  } else {
  }
}

function checkColision() {
  setTimeout(function() {
    if (
      game.player.positionX === game.zombie.positionX &&
      game.player.positionY === game.zombie.positionY
    ) {
      gameRunning = false;
      console.log('Kabooom');
      reset();
    }
    checkColision();
  }, 50);
}

if (gameRunning === true) {
  loop();
  //checkColision();
}
