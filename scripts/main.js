const $canvas = document.querySelector('canvas');
//const context = $canvas.getContext('2d');

const game = new Game($canvas);

/*
console.log(game.player);
console.log(game.player.positionY);
console.log(game.player.positionX);
console.log(game.player.playerWidth);
console.log(game.player.playerHeight);
*/

game.drawEverything();
game.player.moveDown();
