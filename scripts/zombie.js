class Zombie {
  constructor(game) {
    this.zombieWidth = 50;
    this.zombieHeight = 50;
    this.positionX = 9;
    this.positionY = 9;
    this.game = game;
  }

  moveUp() {
    if (this.positionY - 1 < 0) {
    } else if (table[this.positionY - 1][this.positionX] == 'b') {
    } else {
      this.positionY--;
    }
  }

  moveRight() {
    if (this.positionX + 1 > 9) {
    } else if (table[this.positionY][this.positionX + 1] == 'b') {
    } else {
      this.positionX++;
    }
  }

  moveDown() {
    if (this.positionY + 1 > 9) {
    } else if (table[this.positionY + 1][this.positionX] == 'b') {
    } else {
      this.positionY++;
    }
  }

  moveLeft() {
    if (this.positionX - 1 < 0) {
    } else if (table[this.positionY][this.positionX - 1] == 'b') {
    } else {
      this.positionX--;
      console.log(this.positionX + ' ' + this.positionY);
    }
  }

  setRandom1() {
    var movement = Math.floor(Math.random() * 8);
    console.log(movement);
    if (movement == 0 || movement == 1) {
      this.moveUp();
    } else if (movement == 2 || movement == 3) {
      this.moveDown();
    } else if (movement == 4 || movement == 5) {
      this.moveLeft();
    } else if (movement == 6 || movement == 7) {
      this.moveRight();
    } else {
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
    const imageUrl = '/projects/Cave-Game/images/Zombie/selected.png';
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
