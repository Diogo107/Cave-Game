//Maps (Defined and Default)

var table = [
  ['1', '1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0', '0'],
  ['0', '0', '1', '1', '0', '0'],
  ['0', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1', '1']
];

var table = [
  ['1', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
  ['1', '1', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '1', '1', '1', '1', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '1', '1', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '1', '1', '1', '1']
];

var tableSize = table.length;

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

class Map {
  constructor(game) {
    this.game = game;
    this.width = this.game.$canvas.width;
    this.height = this.game.$canvas.height;
    this.tileWidth = this.width / table[0].length;
    this.tileHeight = this.height / table.length;
    this.tile = {
      width: this.tileWidth,
      height: this.tileHeight
    };

    console.log(table);
  }

  randomBlackWhite() {
    var bW = Math.floor(Math.random() * 10);
    //console.log(bW)
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
        } else {
          array[i][x] = this.randomBlackWhite();
        }

        //console.log(array[i][x]);
      }
      //console.log(i)
    }
  }

  //console.log(tableSize)

  paint(table) {
    const context = this.game.context;
    for (let y = 0; y < tableSize; y++) {
      for (let x = 0; x < tableSize; x++) {
        if (table[y][x] == 'b') {
          context.fillStyle = 'black';
        } else {
          context.fillStyle = 'white';
        }
        context.fillRect(
          x * this.tileWidth,
          y * this.tile.height,
          this.tile.width,
          this.tile.height
        );

        // console.log('x'+x)
        // console.log('i'+i)
        // context.fillStyle = 'Black'
        // context.fillRect(i * tile.width[x], i * tile.height[x], (i+1)*tile.width[x], (x+1)*tile.height[x]);
      }
    }
    context.fillStyle = '#FC4A1A';
    context.fillRect(0, 0, 3, context.canvas.height);
    context.fillRect(0, 0, context.canvas.width, 3);
    context.fillRect(context.canvas.width - 3, 0, context.canvas.width, context.canvas.height);
    context.fillRect(0, context.canvas.height - 3, context.canvas.width, 3);
  }

  paintEverything() {
    const context = this.game.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    this.randomTable(table);
    this.paint(table);
  }
}
