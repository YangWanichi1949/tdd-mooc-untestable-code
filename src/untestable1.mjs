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
ANSWER:
  1. This code is hard to test because it directly uses the current system time.
  2. The result depends on the actual date when the test is run.
  3. To make it testable, the current date should be passed in as a parameter.
*/