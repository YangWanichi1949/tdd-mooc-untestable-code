import { describe, expect, it } from "vitest";
import { daysUntilChristmas } from "../src/testable1.mjs";

describe("daysUntilChristmas", () => {
  it("returns 24 days on December 1", () => {
    expect(daysUntilChristmas(new Date(2026, 11, 1))).toBe(24);
  });

  it("returns 0 days on Christmas Day", () => {
    expect(daysUntilChristmas(new Date(2026, 11, 25))).toBe(0);
  });

  it("returns days until next Christmas after Christmas has passed", () => {
    expect(daysUntilChristmas(new Date(2026, 11, 26))).toBe(364);
  });
});
