//Maps (Defined and Default)

/*var table = [
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
  ['0', '0', '0', '0', '0', '0', '1', '1', '1', 'out']
];

var table3 = [
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
];*/

class Map {
  constructor(game) {
    this.game = game;
    this.table = [];
    this.width = this.game.$canvas.width;
    this.height = this.game.$canvas.height;
    this.tileWidth = this.width / 10;
    this.tileHeight = this.height / 10;
    this.tile = {
      width: this.tileWidth,
      height: this.tileHeight
    };

    //  console.log(table);
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
        } else if (array[i][x] === 'out') {
          array[i][x] === 'out';
        } else {
          array[i][x] = this.randomBlackWhite();
          //console.log(array);
        }

        //console.log(array[i][x]);
      }
      //console.log(i)
    }
    //var table1 = array;
  }

  //console.log(tableSize)

  paint(table) {
    const context = this.game.context;
    for (let y = 0; y < this.table.length; y++) {
      for (let x = 0; x < this.table.length; x++) {
        if (table[y][x] == 'b') {
          context.fillStyle = '#532b24';
        } else if (table[y][x] == 'out') {
          context.fillStyle = 'orange';
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
    //    this.randomTable(table);
    //console.log(game.player.positionY);
    //console.log(table[game.player.positionY][game.player.positionX]);
  }

  seeingRadius() {
    const context = this.game.context;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (
          (y === game.player.positionY && x === game.player.positionX) ||
          (y === game.player.positionY && x === game.player.positionX - 1) ||
          (y === game.player.positionY && x === game.player.positionX - 2) ||
          (y === game.player.positionY && x === game.player.positionX + 1) ||
          (y === game.player.positionY && x === game.player.positionX + 2) ||
          (y - 1 === game.player.positionY && x === game.player.positionX + 1) ||
          (y - 1 === game.player.positionY && x === game.player.positionX - 1) ||
          (y + 1 === game.player.positionY && x === game.player.positionX + 1) ||
          (y + 1 === game.player.positionY && x === game.player.positionX - 1) ||
          (y - 1 === game.player.positionY && x === game.player.positionX) ||
          (y + 1 === game.player.positionY && x === game.player.positionX) ||
          (y - 2 === game.player.positionY && x === game.player.positionX) ||
          (y + 2 === game.player.positionY && x === game.player.positionX)
        ) {
        } else {
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
    // console.log(tableSelected[selected]);
    // console.log(this.table);
    // console.log((this.table = tableSelected[selected]));
    // console.log(this.table);
    return (this.table = tableSelected[selected]);
  }
}
