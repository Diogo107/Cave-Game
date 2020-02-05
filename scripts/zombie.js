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
      console.log('Up');
    } else {
      this.positionY--;
    }
  }

  moveRight() {
    if (this.positionX + 1 > 9) {
    } else if (this.game.map.table[this.positionY][this.positionX + 1] == 'b') {
      this.setRandom1();
      console.log('Right');
    } else {
      this.positionX++;
    }
  }

  moveDown() {
    if (this.positionY + 1 > 9) {
    } else if (this.game.map.table[this.positionY + 1][this.positionX] == 'b') {
      this.setRandom1();
      console.log('Down');
    } else {
      this.positionY++;
    }
  }

  moveLeft() {
    if (this.positionX - 1 < 0) {
    } else if (this.game.map.table[this.positionY][this.positionX - 1] == 'b') {
      this.setRandom1();
      console.log('Left');
    } else {
      this.positionX--;
      console.log(this.positionX + ' ' + this.positionY);
    }
  }

  setRandom1() {
    if (this.typeOfMove < 3) {
      this.typeOfMove++;
      if (this.typeOfMove % 2 == 0) {
        console.log('Try x');
        if (this.game.player.positionX - this.positionX < 0) {
          this.moveLeft();
        } else {
          this.moveRight();
        }
      } else {
        console.log('Try y');
        if (this.game.player.positionY - this.positionY < 0) {
          this.moveUp();
        } else {
          this.moveDown();
        }
      }
    } else if (this.typeOfMove < 6) {
      console.log('Random try');
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
        console.log('Random');
      }
    } else {
      this.typeOfMove = 0;
      this.setRandom1();
    }

    /*switch (movement) {
      case 1 || 2:
        this.moveUp();
        break;
      case 3 || 4:
        this.moveDown();
        break;
      case 5 || 6:
        this.moveLeft();
        break;
      case 7 || 8:
        this.moveRight();
        break;
      default:
        break;
    }*/
    //console.log('Random');
  }

  drawZombie() {
    if (this.movement == 0) {
      this.movement++;
      const imageUrl = './images/Zombie/0_Reaper_Man_Walking_001.png';
      const zombieImg = new Image();
      zombieImg.src = imageUrl;
      this.game.context.drawImage(
        zombieImg,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 1) {
      this.movement++;
      const imageUrl = './images/Zombie/0_Reaper_Man_Walking_004.png';
      const zombieImg = new Image();
      zombieImg.src = imageUrl;
      this.game.context.drawImage(
        zombieImg,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else if (this.movement == 2) {
      this.movement++;
      const imageUrl = './images/Zombie/0_Reaper_Man_Walking_022.png';
      const zombieImg = new Image();
      zombieImg.src = imageUrl;
      this.game.context.drawImage(
        zombieImg,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    } else {
      this.movement = 0;
      const imageUrl = './images/Zombie/0_Reaper_Man_Walking_019.png';
      const zombieImg = new Image();
      zombieImg.src = imageUrl;
      this.game.context.drawImage(
        zombieImg,
        this.positionX * 45,
        this.positionY * 45,
        this.zombieWidth,
        this.zombieHeight
      );
    }
  }
}
