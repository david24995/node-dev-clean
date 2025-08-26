import { BaseRepository } from '@shared/application/base.repository';
import { UserModel } from '@user/domain/user.model';

export class UserUseCase {
  constructor(private operation: BaseRepository<UserModel>) {}

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
