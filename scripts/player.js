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
    if (gameRunning == true) {
      if (this.positionY - 1 < 0) {
      } else if (game.map.table[this.positionY - 1][this.positionX] == 'b') {
      } else {
        this.positionY--;
        game.map.paintEverything();
        game.zombie.drawZombie();
        game.map.seeingRadius();
      }
    }
  }
  moveRight() {
    if (gameRunning == true) {
      if (this.positionX + 1 > 9) {
      } else if (game.map.table[this.positionY][this.positionX + 1] == 'b') {
      } else {
        this.positionX++;
        game.map.paintEverything();
        game.zombie.drawZombie();
        game.map.seeingRadius();
      }
    }
  }
  moveDown() {
    if (gameRunning == true) {
      if (this.positionY + 1 > 9) {
      } else if (game.map.table[this.positionY + 1][this.positionX] == 'b') {
      } else {
        this.positionY++;
        game.map.paintEverything();
        game.zombie.drawZombie();
        game.map.seeingRadius();
        //seeingRadius();
      }
    }

    //console.log(this.positionX + ' ' + this.positionY);
  }
  moveLeft() {
    if (gameRunning == true) {
      if (this.positionX - 1 < 0) {
      } else if (game.map.table[this.positionY][this.positionX - 1] == 'b') {
      } else {
        this.positionX--;
        game.map.paintEverything();
        game.zombie.drawZombie();
        game.map.seeingRadius();

        //seeingRadius();
      }
    }
  }

  drawPlayer() {
    if (this.movement == 0) {
      this.movement++;
      const imageUrl = '/projects/Cave-Game/images/Hero/Run_000.png';
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
