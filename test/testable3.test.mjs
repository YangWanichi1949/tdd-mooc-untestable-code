import { describe, expect, it } from "vitest";
import { parsePeopleCsv } from "../src/testable3.mjs";

describe("parsePeopleCsv", () => {
  it("parses csv data into person objects", async () => {
    const fakeReadFile = async () => {
      return `
John,Doe,25,Male
Jane,Smith,30,Female
`;
    };

    const result = await parsePeopleCsv(fakeReadFile, "people.csv");

    expect(result).toEqual([
      {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        gender: "m",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        age: 30,
        gender: "f",
      },
    ]);
  });
});