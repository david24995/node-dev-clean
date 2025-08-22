import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';

export class UserUseCase {
  constructor(private operation: UserRepository) {}

  list(): UserModel[] {
    return this.operation.list();
  }
  insert(user: Partial<UserModel>): UserModel {
    return this.operation.insert(user as UserModel);
  }
}
