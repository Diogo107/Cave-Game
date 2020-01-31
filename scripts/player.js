class Player {
  constructor(game) {
    this.playerWidth = 45;
    this.playerHeight = 45;
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
    this.drawPlayer();
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
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeight
    );
  }
}
