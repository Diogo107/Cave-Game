class Controls {
  constructor(game) {
    this.game = game;
    this.setKeyBindings();
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();

      // React based on the key pressed
      switch (event.keyCode) {
        case 37:
          if (this.game.gameRunning === true) {
            this.game.player.moveLeft();
            //console.log(this.game.player);
            //this.game.map.paint();
            this.game.player.drawPlayer();
          }
          break;
        case 38:
          if (this.game.gameRunning === true) {
            this.game.player.moveUp();
            //console.log(this.game.player);
            //this.game.map.paint();
            this.game.player.drawPlayer();
          }
          break;
        case 39:
          if (this.game.gameRunning === true) {
            this.game.player.moveRight();
            //console.log(this.game.player);
            //this.game.map.paint();
            this.game.player.drawPlayer();
          }
          break;
        case 40:
          if (this.game.gameRunning === true) {
            this.game.player.moveDown();
            //console.log(this.game.player);
            //this.game.map.paint();
            this.game.player.drawPlayer();
          }
          break;
        case 32:
          if (this.game.player.positionX == 0 && this.game.player.positionY == 0) {
            this.game.start();
          } else if (
            this.game.player.positionX === this.game.zombie.xPosition() &&
            this.game.player.positionY === this.game.zombie.yPosition()
            // (this.game.player.positionX == 9 && this.game.player.positionY == 9) ||
            // (this.game.player.positionX == 0 && this.game.player.positionY == 9) ||
            // (this.game.player.positionX == 9 && this.game.player.positionY == 0)
          ) {
            this.game.reset();
          } else {
            this.game.pause();
          }
          break;
      }
    });
  }
}
