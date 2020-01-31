class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.player = new Player(this);
    this.map = new Map(this);
  }

  drawEverything() {
    this.map.paintEverything();
    this.player.drawPlayer();
  }
}
