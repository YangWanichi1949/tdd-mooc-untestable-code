function diceRoll() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export function diceHandValue() {
  const die1 = diceRoll();
  const die2 = diceRoll();
  if (die1 === die2) {
    // one pair
    return 100 + die1;
  } else {
    // high die
    return Math.max(die1, die2);
  }
}
/*
Q：What things make the code examples hard to test？
  
  1. This code is hard to test because it directly uses Math.random().
  2. The dice values are different on every execution, so tests cannot reliably predict the output. 
  3. To make the code testable, the random number generator should be injected as a dependency.
*/
