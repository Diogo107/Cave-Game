/*var playerWidth = context.canvas.width / 10;
var playerHeight = context.canvas.width / 10;*/

class Player {
  constructor(game) {
    this.positionX = 0;
    this.positionY = 0;
  }

  moveUp() {
    this.positionY--;
  }
  moveRight() {
    this.positionX++;
  }
  moveDown() {
    this.positionY++;
    drawPlayer();
  }
  moveLeft() {
    this.positionX--;
  }
}

function drawPlayer() {
  const imageUrl = '/projects/Cave-Game/images/Knight/knight.png';
  const playerImg = new Image();
  playerImg.src = imageUrl;
  context.drawImage(playerImg, player.positionX, player.positionY, screen.width, screen.height);
}
