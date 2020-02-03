class Zombie {
  constructor(game) {
    this.zombieWidth = 50;
    this.zombieHeight = 50;
    this.positionX = 9;
    this.positionY = 9;
    this.game = game;
  }

  setRandom() {}

  drawZombie() {
    const imageUrl = '/projects/Cave-Game/images/Rogue/rogue.png';
    const zombieImg = new Image();
    zombieImg.src = imageUrl;
    this.game.context.drawImage(
      zombieImg,
      this.positionX * 45,
      this.positionY * 45,
      this.zombieWidth,
      this.zombieHeight
    );
  }
}
