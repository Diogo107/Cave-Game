const crate = new Image();
crate.src = './images/Objects/Crate.png';

const lostImg = new Image();
lostImg.src = './images/Lost.png';

const playerImg1 = new Image();
playerImg1.src = './images/Hero/Run_000.png';

const playerImg2 = new Image();
playerImg2.src = './images/Hero/Run_001.png';

const playerImg3 = new Image();
playerImg3.src = './images/Hero/Run_002.png';

const playerImg4 = new Image();
playerImg4.src = './images/Hero/Run_003.png';

const playerImg5 = new Image();
playerImg5.src = './images/Hero/Run_004.png';

const playerImg6 = new Image();
playerImg6.src = './images/Hero/Run_005.png';

const playerImg7 = new Image();
playerImg7.src = './images/Hero/Run_006.png';

const playerImg8 = new Image();
playerImg8.src = './images/Hero/Run_007.png';

const zombieImg1 = new Image();
zombieImg1.src = './images/Zombie/0_Reaper_Man_Walking_000.png';

const zombieImg2 = new Image();
zombieImg2.src = './images/Zombie/0_Reaper_Man_Walking_001.png';

const zombieImg3 = new Image();
zombieImg3.src = './images/Zombie/0_Reaper_Man_Walking_002.png';

const zombieImg4 = new Image();
zombieImg4.src = './images/Zombie/0_Reaper_Man_Walking_003.png';

const zombieImg5 = new Image();
zombieImg5.src = './images/Zombie/0_Reaper_Man_Walking_004.png';

const zombieImg6 = new Image();
zombieImg6.src = './images/Zombie/0_Reaper_Man_Walking_005.png';

const zombieImg7 = new Image();
zombieImg7.src = './images/Zombie/0_Reaper_Man_Walking_006.png';

const zombieImg8 = new Image();
zombieImg8.src = './images/Zombie/0_Reaper_Man_Walking_007.png';

const zombieImg9 = new Image();
zombieImg9.src = './images/Zombie/0_Reaper_Man_Walking_008.png';

const zombieImg10 = new Image();
zombieImg10.src = './images/Zombie/0_Reaper_Man_Walking_009.png';

const begginingArrow = new Image();
begginingArrow.src = './images/Objects/ArrowSign.png';

const candle = new Image();
candle.src = './images/Objects/candle.png';

class Data {
  constructor(game) {
    this.game = game;
    this.audio = new Audio('./sounds/background-sound.mp3');
    this.lose = new Audio('./sounds/lose.wav');
  }
}
