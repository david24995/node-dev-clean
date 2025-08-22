import { UserModel } from '../domain/user.model';

export interface UserRepository {
  list(): UserModel[];
  getOne(id: number): UserModel;
  getPage(page: number): UserModel[];
  insert(user: Partial<UserModel>): UserModel;
  update(id: number, user: Partial<UserModel>): UserModel;
  delete(id: number): UserModel;
}
