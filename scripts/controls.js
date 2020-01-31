window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      console.log(player);
      break;
    case 38:
      player.moveUp();
      console.log(player);
      break;
    case 39:
      player.moveRight();
      console.log(player);
      break;
    case 40:
      player.moveDown();
      console.log(player);
      break;
  }
});
