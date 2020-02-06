class Zombie {
  constructor(game) {
    this.zombieWidth = 50;
    this.zombieHeight = 50;
    this.positionX = 9;
    this.positionY = 9;
    this.game = game;
    this.movement = 0;
    this.typeOfMove = 0;
  }

  xPosition() {
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        if (this.game.map.table[i][x] === 'out') {
          var xPositionNumber = x;
        }
      }
    }
    return xPositionNumber;
  }

  yPosition() {
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        if (this.game.map.table[i][x] === 'out') {
          var yPositionNumber = i;
        }
      }
    }
    return yPositionNumber;
  }

  moveUp() {
    if (this.positionY - 1 < 0) {
    } else if (this.game.map.table[this.positionY - 1][this.positionX] == 'b') {
      this.setRandom1();
    } else {
      this.positionY--;
    }
  }

  moveRight() {
    if (this.positionX + 1 > 9) {
    } else if (this.game.map.table[this.positionY][this.positionX + 1] == 'b') {
      this.setRandom1();
    } else {
      this.positionX++;
    }
  }

  moveDown() {
    if (this.positionY + 1 > 9) {
    } else if (this.game.map.table[this.positionY + 1][this.positionX] == 'b') {
      this.setRandom1();
    } else {
      this.positionY++;
    }
  }

  moveLeft() {
    if (this.positionX - 1 < 0) {
    } else if (this.game.map.table[this.positionY][this.positionX - 1] == 'b') {
      this.setRandom1();
    } else {
      this.positionX--;
    }
  }

  setRandom1() {
    if (this.typeOfMove < 3) {
      this.typeOfMove++;
      if (this.typeOfMove % 2 == 0) {
        if (this.game.player.positionX - this.positionX < 0) {
          this.moveLeft();
        } else {
          this.moveRight();
        }
      } else {
        if (this.game.player.positionY - this.positionY < 0) {
          this.moveUp();
        } else {
          this.moveDown();
        }
      }
    } else if (this.typeOfMove < 6) {
      this.typeOfMove++;
      var movement = Math.floor(Math.random() * 8);
      if (movement == 0 || movement == 1) {
        this.moveUp();
      } else if (movement == 2 || movement == 3) {
        this.moveDown();
      } else if (movement == 4 || movement == 5) {
        this.moveLeft();
      } else if (movement == 6 || movement == 7) {
        this.moveRight();
      } else {
        this.setRandom1();
      }
    } else {
      this.typeOfMove = 0;
      this.setRandom1();
    }
  }

  drawZombie() {
    if (this.movement == 0) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg1,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 1) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg2,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 2) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg3,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 3) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg4,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 4) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg5,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 5) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg6,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 6) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg7,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 7) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg8,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 8) {
      this.movement++;
      this.game.context.drawImage(
        zombieImg9,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else {
      this.movement = 0;
      this.game.context.drawImage(
        zombieImg10,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    }
  }
}
