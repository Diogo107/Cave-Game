class Player {
  constructor(game) {
    this.playerWidth = 50;
    this.playerHeight = 50;
    this.positionX = 0;
    this.positionY = 0;
    this.game = game;
    this.movement = 0;
  }

  moveUp() {
    if (this.game.gameRunning == true) {
      if (this.positionY - 1 < 0) {
      } else if (this.game.map.table[this.positionY - 1][this.positionX] == 'b') {
      } else {
        this.positionY--;
        this.game.map.paintEverything();
        this.game.zombie.drawZombie();
        this.game.map.seeingRadius();
      }
    }
  }

  moveRight() {
    if (this.game.gameRunning == true) {
      if (this.positionX + 1 > 9) {
      } else if (this.game.map.table[this.positionY][this.positionX + 1] == 'b') {
      } else {
        this.positionX++;
        this.game.map.paintEverything();
        this.game.zombie.drawZombie();
        this.game.map.seeingRadius();
      }
    }
  }
  moveDown() {
    if (this.game.gameRunning == true) {
      if (this.positionY + 1 > 9) {
      } else if (this.game.map.table[this.positionY + 1][this.positionX] == 'b') {
      } else {
        this.positionY++;
        this.game.map.paintEverything();
        this.game.zombie.drawZombie();
        this.game.map.seeingRadius();
      }
    }
  }
  moveLeft() {
    if (this.game.gameRunning == true) {
      if (this.positionX - 1 < 0) {
      } else if (this.game.map.table[this.positionY][this.positionX - 1] == 'b') {
      } else {
        this.positionX--;
        this.game.map.paintEverything();
        this.game.zombie.drawZombie();
        this.game.map.seeingRadius();
      }
    }
  }

  drawPlayer() {
    if (this.movement == 0) {
      this.movement++;

      this.game.context.drawImage(
        playerImg1,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 1) {
      this.movement++;
      this.game.context.drawImage(
        playerImg2,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 2) {
      this.movement++;
      this.game.context.drawImage(
        playerImg3,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 3) {
      this.movement++;
      this.game.context.drawImage(
        playerImg4,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 4) {
      this.movement++;
      this.game.context.drawImage(
        playerImg5,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 5) {
      this.movement++;
      this.game.context.drawImage(
        playerImg6,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 6) {
      this.movement++;
      this.game.context.drawImage(
        playerImg7,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else {
      this.movement = 0;
      this.game.context.drawImage(
        playerImg8,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    }
  }
}
