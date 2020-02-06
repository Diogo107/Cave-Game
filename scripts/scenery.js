class Scenery {
  constructor(game) {
    this.positionX = 3;
    this.positionY = 3;
    this.candleSpot = [];
    this.candleX = 0;
    this.candleY = 0;
    this.game = game;
  }

  searchCandleLocation() {
    this.candleSpot[0] = Math.floor(Math.random(this.game.map.table.length) * 10);
    this.candleSpot[1] = Math.floor(Math.random(this.game.map.table[0].length) * 10);
    if (
      this.game.map.table[this.candleSpot[0]][this.candleSpot[1]] == 'b' ||
      this.game.map.table[this.candleSpot[0]][this.candleSpot[1]] == 'out' ||
      (this.candleSpot[0] === 0 && this.candleSpot[1] === 0)
    ) {
      this.searchCandleLocation();
    } else {
      this.candleSpot = [this.candleSpot[0], this.candleSpot[1]];
    }

    console.log(this.game.map.table[this.candleSpot[0]][this.candleSpot[1]]);
    // console.log(this.candleSpot[1]);
  }

  drawScenery1() {
    this.game.context.drawImage(begginingArrow, 10, 5, 30, 30);
  }

  drawScenery2() {
    const imageUrl = './images/Objects/Crate.png';
    const begginingArrow = new Image();
    begginingArrow.src = imageUrl;
    this.game.context.drawImage(begginingArrow, 0, 0, 45, 45);
  }

  drawCandle(a, b) {
    // console.log('tried');

    this.game.context.drawImage(candle, a * 45, b * 45, 45, 45);
  }

  sceneryLocation() {
    for (let i = 0; i < 10; i++) {
      if (this.game.map.table.includes('w')) {
      }
    }
  }
}
