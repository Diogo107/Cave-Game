class Map {
  constructor(game) {
    this.game = game;
    this.table = [];
    this.width = this.game.$canvas.width;
    this.height = this.game.$canvas.height;
    this.tileWidth = this.width / 10;
    this.tileHeight = this.height / 10;
    this.radius = 2;
    this.tile = {
      width: this.tileWidth,
      height: this.tileHeight
    };
  }

  drawCrate(a, b) {
    this.game.context.drawImage(crate, a * 45, b * 45, 45, 45);
  }

  drawTreasure(a, b) {
    const imageUrl = './images/Objects/treasure chest0006.png';
    const treasure = new Image();
    treasure.src = imageUrl;
    this.game.context.drawImage(treasure, a * 45, b * 45, 45, 45);
  }

  randomBlackWhite() {
    var bW = Math.floor(Math.random() * 10);
    if (bW < 5) {
      return 'w';
    } else {
      return 'b';
    }
  }

  randomTable(array) {
    for (let i = 0; i < array.length; i++) {
      for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] === '1') {
          array[i][x] = 'x';
        } else if (array[i][x] === 'out') {
          array[i][x] === 'out';
        } else {
          array[i][x] = this.randomBlackWhite();
        }
      }
    }
  }

  paint(table) {
    const context = this.game.context;
    for (let y = 0; y < this.table.length; y++) {
      for (let x = 0; x < this.table.length; x++) {
        if (table[y][x] == 'b') {
          this.drawCrate(x, y);
        } else if (table[y][x] == 'out') {
          context.fillStyle = 'white';
          context.fillRect(
            x * this.tileWidth,
            y * this.tile.height,
            this.tile.width,
            this.tile.height
          );
          this.drawTreasure(x, y);
        } else {
          context.fillStyle = 'white';
          context.fillRect(
            x * this.tileWidth,
            y * this.tile.height,
            this.tile.width,
            this.tile.height
          );
        }
      }
    }
    context.fillStyle = 'black';
    context.fillRect(0, 0, 3, context.canvas.height);
    context.fillRect(0, 0, context.canvas.width, 3);
    context.fillRect(context.canvas.width - 3, 0, context.canvas.width, context.canvas.height);
    context.fillRect(0, context.canvas.height - 3, context.canvas.width, 3);
  }

  paintEverything() {
    const context = this.game.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    this.paint(this.table);
    if (this.game.gameRunning === false) {
      this.game.drawLost();
    }
  }

  seeingRadius() {
    const context = this.game.context;
    const positionX = this.game.player.positionX;
    const positionY = this.game.player.positionY;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const shouldBeLit =
          (Math.abs(positionX - x) < this.radius && Math.abs(positionY - y) < this.radius) ||
          (positionX === x && Math.abs(positionY - y) - 1 < this.radius) ||
          (Math.abs(positionX - x) - 1 < this.radius && positionY === y);
        if (!shouldBeLit) {
          context.fillStyle = 'black';
          context.fillRect(
            x * this.tileWidth,
            y * this.tile.height,
            this.tile.width,
            this.tile.height
          );
        }
      }
    }
  }
  selectTable() {
    var tableSelected = [
      [
        ['1', '1', '0', '0', '0', '0', '0', '0', '0', 'out'],
        ['0', '1', '1', '1', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '1', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '1', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '1', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '1', '1', '1', '1', '1', '1', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
      ],

      [
        ['1', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
        ['1', '1', '0', '0', '1', '0', '0', '1', '0', '0'],
        ['1', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
        ['1', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
        ['1', '1', '1', '1', '1', '0', '0', '1', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '1', '1', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '1', '1', '1', 'out']
      ],

      [
        ['1', '1', '0', '1', '1', '1', '1', '1', '0', '0'],
        ['0', '1', '1', '1', '0', '0', '0', '1', '1', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1'],
        ['0', '0', '0', '0', '1', '1', '1', '0', '1', '1'],
        ['out', '1', '1', '1', '1', '0', '1', '1', '1', '0']
      ]
    ];

    var tableDefault = [
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    ];

    var selected = Math.floor(Math.random() * 3);
    return (this.table = tableSelected[selected]);
  }
}
