class Scenery {
  constructor(game) {
    this.positionX = 3;
    this.positionY = 3;
    this.game = game;
  }

  drawScenery1() {
    const imageUrl = '/projects/Cave-Game/images/Objects/ArrowSign.png';
    const begginingArrow = new Image();
    begginingArrow.src = imageUrl;
    this.game.context.drawImage(begginingArrow, 10, 5, 30, 30);
  }

  drawScenery2() {
    const imageUrl = '/projects/Cave-Game/images/Objects/Crate.png';
    const begginingArrow = new Image();
    begginingArrow.src = imageUrl;
    this.game.context.drawImage(begginingArrow, 0, 0, 45, 45);
  }

  sceneryLocation() {
    for (let i = 0; i < 10; i++) {
      if (this.game.map.table.includes('w')) {
      }
    }
  }
}
