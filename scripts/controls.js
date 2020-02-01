window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      game.player.moveLeft();
      console.log(game.player);
      //game.map.paint();
      //game.player.drawPlayer();
      break;
    case 38:
      game.player.moveUp();
      console.log(game.player);
      //game.map.paint();
      //game.player.drawPlayer();
      break;
    case 39:
      game.player.moveRight();
      console.log(game.player);
      //game.map.paint();
      //game.player.drawPlayer();
      break;
    case 40:
      game.player.moveDown();
      console.log(game.player);
      //game.map.paint();
      //game.player.drawPlayer();
      break;
  }
});
