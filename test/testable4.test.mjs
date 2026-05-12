import { describe, expect, it } from "vitest";
import { PasswordService } from "../src/testable4.mjs";

describe("PasswordService", () => {
  it("changes password when old password is correct", async () => {
    const fakeUser = {
      userId: "john",
      passwordHash: "old-hash",
    };

    const fakeUsers = {
      getById: async () => fakeUser,
      save: async () => {},
    };

    const fakeHashService = {
      verify: () => true,
      hash: () => "new-hash",
    };

    const service = new PasswordService(
      fakeUsers,
      fakeHashService
    );

    await service.changePassword("john", "oldpw", "newpw");

    expect(fakeUser.passwordHash).toBe("new-hash");
  });

  it("throws error when old password is wrong", async () => {
    const fakeUsers = {
      getById: async () => ({
        userId: "john",
        passwordHash: "old-hash",
      }),
      save: async () => {},
    };

    const fakeHashService = {
      verify: () => false,
      hash: () => "new-hash",
    };

    const service = new PasswordService(
      fakeUsers,
      fakeHashService
    );

    await expect(
      service.changePassword("john", "wrong", "newpw")
    ).rejects.toThrow("wrong old password");
  });
});