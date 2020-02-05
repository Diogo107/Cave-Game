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
        //seeingRadius();
      }
    }

    //console.log(this.positionX + ' ' + this.positionY);
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

        //seeingRadius();
      }
    }
  }

  drawPlayer() {
    if (this.movement == 0) {
      this.movement++;
      const imageUrl = './images/Hero/Run_000.png';
      const playerImg = new Image();
      playerImg.src = imageUrl;
      this.game.context.drawImage(
        playerImg,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 1) {
      this.movement++;
      const imageUrl = '/projects/Cave-Game/images/Hero/Run_002.png';
      const playerImg = new Image();
      playerImg.src = imageUrl;
      this.game.context.drawImage(
        playerImg,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else if (this.movement == 2) {
      this.movement++;
      const imageUrl = '/projects/Cave-Game/images/Hero/Run_004.png';
      const playerImg = new Image();
      playerImg.src = imageUrl;
      this.game.context.drawImage(
        playerImg,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    } else {
      this.movement = 0;
      const imageUrl = '/projects/Cave-Game/images/Hero/Run_006.png';
      const playerImg = new Image();
      playerImg.src = imageUrl;
      this.game.context.drawImage(
        playerImg,
        this.positionX * 45,
        this.positionY * 45,
        this.playerWidth - 10,
        this.playerHeight - 10
      );
    }
  }
}
