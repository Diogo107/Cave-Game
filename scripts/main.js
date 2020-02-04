const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

var audio = new Audio(
  '/projects/Cave-Game/sounds/Dark Ambience _ Cave Sounds _ Du0026D Tomb _ 45 Minutes.mp3'
);
var voices = new Audio('/projects/Cave-Game/sounds/voices.mp3');
var scared = new Audio('/projects/Cave-Game/sounds/scared.wav');

var gameRunning = false;

window.onload = function() {
  game.drawEverything();
  //game.map.seeingRadius();
  game.player.drawPlayer();
};

function start() {
  checkColision();
  loop();
}

function reset() {
  game.player.positionX = 0;
  game.player.positionY = 0;
  game.zombie.positionX = 9;
  game.zombie.positionY = 9;
  game.map.selectTable();
  game.drawEverything();
  game.player.drawPlayer();
  game.map.seeingRadius();
}

function pause() {}

//RunLogic
var gameSpeed = 1.5;

function loop() {
  if (gameRunning == true) {
    console.log(gameRunning);
    game.zombie.setRandom1();
    setTimeout(function() {
      //game.map.seeingRadius();
      if (
        (game.zombie.positionY === game.player.positionY &&
          game.zombie.positionX === game.player.positionX) ||
        (game.zombie.positionY === game.player.positionY &&
          game.zombie.positionX === game.player.positionX - 1) ||
        (game.zombie.positionY === game.player.positionY &&
          game.zombie.positionX === game.player.positionX - 2) ||
        (game.zombie.positionY === game.player.positionY &&
          game.zombie.positionX === game.player.positionX + 1) ||
        (game.zombie.positionY === game.player.positionY &&
          game.zombie.positionX === game.player.positionX + 2) ||
        (game.zombie.positionY - 1 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX + 1) ||
        (game.zombie.positionY - 1 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX - 1) ||
        (game.zombie.positionY + 1 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX + 1) ||
        (game.zombie.positionY + 1 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX - 1) ||
        (game.zombie.positionY - 1 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX) ||
        (game.zombie.positionY + 1 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX) ||
        (game.zombie.positionY - 2 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX) ||
        (game.zombie.positionY + 2 === game.player.positionY &&
          game.zombie.positionX === game.player.positionX)
      ) {
        voices.play();
        scared.play();
      }
      loop();
    }, 1000 / gameSpeed);
  } else {
  }
}

function checkColision() {
  setTimeout(function() {
    game.map.paintEverything();
    game.player.drawPlayer();
    game.zombie.drawZombie();
    if (
      game.player.positionX === game.zombie.positionX &&
      game.player.positionY === game.zombie.positionY
    ) {
      gameRunning = false;
      console.log(gameRunning);
      console.log('Kabooom');
      reset();
    }
    gameRunning = true;
    checkColision();
  }, 100);
}
