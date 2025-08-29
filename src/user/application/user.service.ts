export class UserService {
  static cryptPassword(password: string): Promise<string> {
    return Promise.resolve(password);
  }

  static validatePassword(
    password: string,
    cryptPasswordCrypt: string
  ): Promise<boolean> {
    return Promise.resolve(true);
  }
}
