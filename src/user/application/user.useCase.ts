import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';

export class UserUseCase {
  constructor(private operation: UserRepository) {}

  async list(): Promise<UserModel[]> {
    return await this.operation.list();
  }
  async insert(user: Partial<UserModel>): Promise<UserModel> {
    return await this.operation.insert(user as UserModel);
  }

  async getOne(id: number): Promise<UserModel> {
    return await this.getOne(id);
  }

  async update(id: number, user: Partial<UserModel>): Promise<UserModel> {
    return await this.update(id, user);
  }

  async delete(id: number): Promise<UserModel> {
    return await this.delete(id);
  }

  async getPage(page: number): Promise<UserModel[]> {
    return await this.getPage(page);
  }
}
