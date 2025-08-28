export class UserService {
  static cryptPassword(password: string): Promise<string> {
    return Promise.resolve(password);
  }

  static validatePasswordCrypt(
    password: string,
    cryptPassword: string
  ): Promise<boolean> {
    return Promise.resolve(true);
  }
}
