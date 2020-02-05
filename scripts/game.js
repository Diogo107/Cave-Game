class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.player = new Player(this);
    this.zombie = new Zombie(this);
    this.data = new Data(this);
    this.map = new Map(this);
    this.gameSpeed = 1;
    this.audio = new Audio('./sounds/background-sound.mp3');
    this.voices = new Audio('./sounds/voices.mp3');
    this.scared = new Audio('./sounds/scared.wav');
    this.scenery = new Scenery(this);
    this.controls = new Controls(this);
    this.gameRunning = false;
    this.map.selectTable();
    this.drawEverything();
    this.map.seeingRadius();
    this.audio.play();
    this.zombie.positionX = this.zombie.xPosition();
    this.zombie.positionY = this.zombie.yPosition();
    this.scenery.drawScenery1();
    this.player.drawPlayer();
    this.scoreValue = 0;
  }

  drawLost() {
    const imageUrl = '/projects/Cave-Game/images/Lost.png';
    const lostImg = new Image();
    lostImg.src = imageUrl;
    this.context.drawImage(lostImg, 75, 150, 300, 300);
    console.log('printed');
  }

  setScore() {
    score.innerText = this.scoreValue;
  }

  drawEverything() {
    this.map.randomTable(this.map.table);
    this.map.paintEverything();
    this.player.drawPlayer();
    this.zombie.drawZombie();
    this.scenery.drawScenery1();
    //this.scenery.drawScenery2();
  }

  start() {
    if ((this.gameRunning = true)) {
    }
    this.gameRunning = true;
    this.loop();
    this.checkColision();
  }

  reset() {
    this.gameRunning = false;
    this.player.positionX = 0;
    this.player.positionY = 0;
    this.zombie.positionX = 9;
    this.zombie.positionY = 9;
    this.map.selectTable();
    this.drawEverything();
    this.player.drawPlayer();
    this.map.seeingRadius();
    this.drawLost();
    this.zombie.positionX = this.zombie.xPosition();
    this.zombie.positionY = this.zombie.yPosition();
    this.setScore();
  }

  pause() {
    if (this.gameRunning === true) {
      this.gameRunning = false;
      console.log(this.gameRunning);
    } else {
      console.log(this.gameRunning);
      this.gameRunning = true;
      this.loop();
      this.checkColision();
    }
  }

  loop() {
    //    console.log('Começou');
    if (this.gameRunning === true) {
      this.zombie.setRandom1();
      //console.log('Move already');
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
      this.gameRunning === false;
    }
  }

  checkColision() {
    if (this.gameRunning === true) {
      if (
        this.player.positionX === this.zombie.xPosition() &&
        this.player.positionY === this.zombie.yPosition()
      ) {
        console.log('Winner');
        this.map.paintEverything();
        this.player.drawPlayer();
        this.zombie.drawZombie();
        this.scoreValue++;
        this.gameRunning = false;
        this.setScore();
      } else {
        setTimeout(
          function() {
            this.map.paintEverything();
            this.scenery.drawScenery1();
            this.player.drawPlayer();
            this.zombie.drawZombie();
            this.map.seeingRadius();
            if (
              this.player.positionX === this.zombie.positionX &&
              this.player.positionY === this.zombie.positionY
            ) {
              this.scoreValue = 0;
              this.gameRunning = false;
              console.log('Just ate some brains!');
              this.reset();
            } else {
              this.checkColision();
            }
          }.bind(this)
        );
      }
    }
  }
}

//Check Colision
