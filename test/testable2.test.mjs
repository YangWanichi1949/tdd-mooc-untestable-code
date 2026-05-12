import { describe, expect, it } from "vitest";
import { diceHandValue } from "../src/testable2.mjs";

describe("diceHandValue", () => {
  it("returns pair value when both dice are equal", () => {
    const fakeRandom = () => 0.5;

    expect(diceHandValue(fakeRandom)).toBe(104);
  });

  it("returns highest die when dice are different", () => {
    const values = [0.1, 0.8];
    let index = 0;

    const fakeRandom = () => {
      return values[index++];
    };

    expect(diceHandValue(fakeRandom)).toBe(5);
  });
});