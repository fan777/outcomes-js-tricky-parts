function guessingGame() {
  let num = Math.floor(Math.random() * 100);
  let counter = 0;
  let isDone = false;

  return function (x) {
    if (isDone) {
      return "The game is over, you already won!"
    }

    if (x > num) {
      counter++;
      return `${x} is too high!`
    } else if (x < num) {
      counter++;
      return `${x} is too low!`
    } else {
      counter++;
      isDone = true;
      return `You win! You found ${num} in ${counter} guesses.`
    }
  }
}

module.exports = { guessingGame };
