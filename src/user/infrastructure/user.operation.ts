import { UserRepository } from '../application/user.repository';
import { UserModel } from '../domain/user.model';

export class UserOperation implements UserRepository {
  getPage(page: number): UserModel[] {
    return [
      {
        id: 1,
        name: 'David',
        email: 'test@test.com',
        password: '123',
        photo: '1.jpeg',
        roles: ['OPERATOR'],
      },
    ];
  }
  getOne(id: number): UserModel {
    return {
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: ['OPERATOR'],
    };
  }
  update(id: number, user: Partial<UserModel>): UserModel {
    return {
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: ['OPERATOR'],
    };
  }
  delete(id: number): UserModel {
    return {
      id: 1,
      name: 'David',
      email: 'test@test.com',
      password: '123',
      photo: '1.jpeg',
      roles: ['OPERATOR'],
    };
  }
  list(): UserModel[] {
    return [
      {
        id: 1,
        name: 'David',
        email: 'test@test.com',
        password: '123',
        photo: '1.jpeg',
        roles: ['OPERATOR'],
      },
    ];
  }
  insert(user: Partial<UserModel>): UserModel {
    return { id: 2, ...user } as UserModel;
  }
}
