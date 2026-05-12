const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (today.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
/*
Q：What things make the code examples hard to test？
  
  This code is hard to test because it directly uses Math.random().
  The dice values are different on every execution, so tests cannot reliably predict the output. 
  To make the code testable, the random number generator should be injected as a dependency.
*/