import { BaseRepository } from '@shared/application/base.repository';
import { UserModel } from '@user/domain/user.model';

export class UserOperation implements BaseRepository<UserModel> {
  async getPage(page: number): Promise<UserModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'David',
        email: 'test@test.com',
        password: '123',
        photo: '1.jpeg',
        roles: ['OPERATOR'],
      },
    ]);
  }
  async getOne(id: number): Promise<UserModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: ['OPERATOR'],
    });
  }
  async update(id: number, user: Partial<UserModel>): Promise<UserModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: ['OPERATOR'],
    });
  }
  async delete(id: number): Promise<UserModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: ['OPERATOR'],
    });
  }
  async list(): Promise<UserModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'David',
        email: 'test@test.com',
        password: '123',
        photo: '1.jpeg',
        roles: ['OPERATOR'],
      },
    ]);
  }
  async insert(user: Partial<UserModel>): Promise<UserModel> {
    return Promise.resolve({ id: 2, ...user } as UserModel);
  }
}
