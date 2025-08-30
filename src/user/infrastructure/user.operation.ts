import { BaseRepository } from '@shared/application/base.repository';
import { UserRequestDto } from '@user/application/user.dto';
import { UserModel } from '@user/domain/user.model';

export class UserOperation
  implements BaseRepository<UserModel, UserRequestDto>
{
  async getPage(page: number): Promise<UserModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'David',
        email: 'test@test.com',
        password: '123',
        photo: '1.jpeg',
        roles: [{ id: 1, name: 'OPERATOR' }],
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
      roles: [{ id: 1, name: 'OPERATOR' }],
    });
  }
  async update(id: number, user: Partial<UserModel>): Promise<UserModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: [{ id: 1, name: 'OPERATOR' }],
    });
  }
  async delete(id: number): Promise<UserModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: [{ id: 1, name: 'OPERATOR' }],
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
        roles: [{ id: 1, name: 'OPERATOR' }],
      },
    ]);
  }
  async insert(user: Partial<UserRequestDto>): Promise<UserModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: [{ id: 1, name: 'OPERATOR' }],
    });
  }
}
