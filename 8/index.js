function guessNmber(end) {
  const output = Math.floor(Math.random() * end);
  const input = parseInt(prompt(`Write num range 0 to ${end}`));
  let message = output == input ? 'You win!' : 'You lose';
  return message;
}

alert(guessNmber(10));