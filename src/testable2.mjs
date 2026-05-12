function diceRoll(random) {
  const min = 1;
  const max = 6;

  return Math.floor(random() * (max + 1 - min) + min);
}

export function diceHandValue(random) {
  const die1 = diceRoll(random);
  const die2 = diceRoll(random);

  if (die1 === die2) {
    return 100 + die1;
  } else {
    return Math.max(die1, die2);
  }
}