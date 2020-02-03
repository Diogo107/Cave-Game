class Player {
  constructor(game) {
    this.playerWidth = 50;
    this.playerHeight = 50;
    this.positionX = 0;
    this.positionY = 0;
    this.game = game;
  }

  moveUp() {
    console.log(table);
    if (this.positionY - 1 < 0) {
    } else if (table[this.positionY - 1][this.positionX] == 'b') {
    } else {
      this.positionY--;
      game.map.paintEverything();
    }
  }
  moveRight() {
    if (this.positionX + 1 > 9) {
    } else if (table[this.positionY][this.positionX + 1] == 'b') {
    } else {
      this.positionX++;
      game.map.paintEverything();
    }
    console.log(table[this.positionY][this.positionX]);
  }
  moveDown() {
    if (this.positionY + 1 > 9) {
    } else if (table[this.positionY + 1][this.positionX] == 'b') {
    } else {
      this.positionY++;
      game.map.paintEverything();
    }

    //console.log(this.positionX + ' ' + this.positionY);
  }
  moveLeft() {
    if (this.positionX - 1 < 0) {
    } else if (table[this.positionY][this.positionX - 1] == 'b') {
    } else {
      this.positionX--;
      game.map.paintEverything();
    }
  }

  drawPlayer() {
    const imageUrl = './images/Rogue/rogue.png';
    const playerImg = new Image();
    playerImg.src = imageUrl;
    //console.log(this.game);
    this.game.context.drawImage(
      playerImg,
      this.positionX * 45,
      this.positionY * 45,
      this.playerWidth,
      this.playerHeight
    );
  }
}
