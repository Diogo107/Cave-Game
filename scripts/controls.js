class Controls {
  constructor(game) {
    this.game = game;
    this.setKeyBindings();
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      event.preventDefault();

      switch (event.keyCode) {
        case 37:
          if (this.game.gameRunning === true) {
            this.game.player.moveLeft();
            this.game.player.drawPlayer();
          }
          break;
        case 38:
          if (this.game.gameRunning === true) {
            this.game.player.moveUp();
            this.game.player.drawPlayer();
          }
          break;
        case 39:
          if (this.game.gameRunning === true) {
            this.game.player.moveRight();
            this.game.player.drawPlayer();
          }
          break;
        case 40:
          if (this.game.gameRunning === true) {
            this.game.player.moveDown();
            this.game.player.drawPlayer();
          }
          break;
        case 32:
          if (this.game.player.positionX === 0 && this.game.player.positionY === 0) {
            this.game.start();
          } else if (
            this.game.player.positionX === this.game.zombie.xPosition() &&
            this.game.player.positionY === this.game.zombie.yPosition()
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
