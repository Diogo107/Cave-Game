class Player {
  constructor(game) {
    this.playerWidth = 50;
    this.playerHeight = 50;
    this.positionX = 0;
    this.positionY = 0;
    this.game = game;
  }

  moveUp() {
    this.positionY--;
  }
  moveRight() {
    this.positionX++;
  }
  moveDown() {
    this.positionY++;
    //console.log(this.positionX + ' ' + this.positionY);
  }
  moveLeft() {
    this.positionX--;
  }

  drawPlayer() {
    const imageUrl = '/projects/Cave-Game/images/Rogue/rogue.png';
    const playerImg = new Image();
    playerImg.src = imageUrl;
    console.log(this.game);
    this.game.context.drawImage(
      playerImg,
      this.positionX * 45,
      this.positionY * 45,
      this.playerWidth,
      this.playerHeight
    );
  }
}
