export class PasswordService {
  constructor(users, hashService) {
    this.users = users;
    this.hashService = hashService;
  }

  async changePassword(userId, oldPassword, newPassword) {
    const user = await this.users.getById(userId);

    if (!this.hashService.verify(user.passwordHash, oldPassword)) {
      throw new Error("wrong old password");
    }

    user.passwordHash = this.hashService.hash(newPassword);

    await this.users.save(user);
  }
}