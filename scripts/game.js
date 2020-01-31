class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.context;
    this.player = new Player(this);
    this.map = new Map(this);
  }
}
