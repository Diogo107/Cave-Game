class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.player = new Player(this);
    this.zombie = new Zombie(this);
    //    this.zombie2 = new Zombie(this);
    this.map = new Map(this);
  }

  drawEverything() {
    this.map.randomTable(table);
    this.map.paintEverything();
    this.player.drawPlayer();
    this.zombie.drawZombie();
  }
}

//Check Colision
