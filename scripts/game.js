class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.player = new Player(this);
    this.zombie = new Zombie(this);
    //    this.zombie2 = new Zombie(this);
    this.map = new Map(this);
    this.gameSpeed = 1;
    this.audio = new Audio('/projects/Cave-Game/sounds/background-sound.mp3');
    this.voices = new Audio('/projects/Cave-Game/sounds/voices.mp3');
    this.scared = new Audio('/projects/Cave-Game/sounds/scared.wav');
    this.gameRunning = false;
  }

  drawEverything() {
    this.map.randomTable(this.map.table);
    this.map.paintEverything();
    this.player.drawPlayer();
    this.zombie.drawZombie();
  }

  start() {
    this.loop();
    this.checkColision();
    this.gameRunning = true;
    console.log(gameRunning);
  }

  reset() {
    this.gameRunning = false;
    this.player.positionX = 0;
    this.player.positionY = 0;
    this.zombie.positionX = 9;
    this.zombie.positionY = 9;
    this.map.selectTable();
    console.log(this.map.table);
    this.drawEverything();
    this.player.drawPlayer();
    this.map.seeingRadius();
  }

  pause() {
    console.log(this.gameRunning);
    if (this.gameRunning === true) {
      this.gameRunning = false;
    } else {
      this.gameRunning = true;
      this.loop();
    }
  }

  loop() {
    //    console.log('Começou');
    if (this.gameRunning == true) {
      this.zombie.setRandom1();
      console.log('Move already');
      setTimeout(
        function() {
          if (
            (this.zombie.positionY === this.player.positionY &&
              this.zombie.positionX === this.player.positionX) ||
            (this.zombie.positionY === this.player.positionY &&
              this.zombie.positionX === this.player.positionX - 1) ||
            (this.zombie.positionY === this.player.positionY &&
              this.zombie.positionX === this.player.positionX - 2) ||
            (this.zombie.positionY === this.player.positionY &&
              this.zombie.positionX === this.player.positionX + 1) ||
            (this.zombie.positionY === this.player.positionY &&
              this.zombie.positionX === this.player.positionX + 2) ||
            (this.zombie.positionY - 1 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX + 1) ||
            (this.zombie.positionY - 1 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX - 1) ||
            (this.zombie.positionY + 1 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX + 1) ||
            (this.zombie.positionY + 1 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX - 1) ||
            (this.zombie.positionY - 1 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX) ||
            (this.zombie.positionY + 1 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX) ||
            (this.zombie.positionY - 2 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX) ||
            (this.zombie.positionY + 2 === this.player.positionY &&
              this.zombie.positionX === this.player.positionX)
          ) {
            this.voices.play();
            this.scared.play();
          }
          this.loop();
        }.bind(this),
        1000 / this.gameSpeed
      );
    } else {
    }
  }

  checkColision() {
    if (
      this.player.positionX == game.zombie.xPosition() &&
      this.player.positionY == game.zombie.yPosition()
    ) {
      console.log('Winner');
      console.log(gameRunning);
      gameRunning = false;
      this.map.paintEverything();
      this.player.drawPlayer();
      this.zombie.drawZombie();
    } else {
      setTimeout(
        function() {
          this.map.paintEverything();
          this.player.drawPlayer();
          this.zombie.drawZombie();
          this.map.seeingRadius();
          if (
            this.player.positionX === this.zombie.positionX &&
            this.player.positionY === this.zombie.positionY
          ) {
            gameRunning = false;
            console.log(gameRunning);
            console.log('Kabooom');
            this.reset();
          }
          gameRunning = true;
          this.checkColision();
        }.bind(this),
        100
      );
    }
  }
}

//Check Colision
