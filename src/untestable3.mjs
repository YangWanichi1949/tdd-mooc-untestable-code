import { readFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";

export async function parsePeopleCsv(filePath) {
  const csvData = await readFile(filePath, { encoding: "utf8" });
  const records = parse(csvData, {
    skip_empty_lines: true,
    trim: true,
  });
  return records.map(([firstName, lastName, age, gender]) => {
    const person = {
      firstName,
      lastName,
      gender: gender.charAt(0).toLowerCase(),
    };
    if (age !== "") {
      person.age = parseInt(age);
    }
    return person;
  });
}
/*
Q：What things make the code examples hard to test？
  
  1. This code is hard to test because it directly reads from the real file system.
  2. Tests depend on external files existing on disk, which makes them slower and more fragile. 
  3. To make the code testable, the file-reading functionality should be injected as a dependency.
*/