import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.useCase';
import { UserModel } from '../domain/user.model';
import { UserOperation } from '../infrastructure/user.operation';
import { UserRepository } from '../application/user.repository';
import { ResultRepository } from '@shared/application/result.repository';

const userOperation: UserRepository = new UserOperation();
const userUseCase = new UserUseCase(userOperation);

export class UserController {
  async list(req: Request, res: Response) {
    const users: ResultRepository<UserModel> = await userUseCase.list();

    res.json(users);
  }

  async getOne(req: Request, res: Response) {
    const user: UserModel = await userUseCase.getOne(1);

    res.json(user);
  }

  async update(req: Request, res: Response) {
    const user: Partial<UserModel> = {
      photo: 'andrea2.jpg',
    };

    const result: UserModel = await userUseCase.update(1, user);
    res.json(result);
  }

  async delete(req: Request, res: Response) {
    const result: UserModel = await userUseCase.delete(1);
    res.json(result);
  }

  async getPage(req: Request, res: Response) {
    const result: UserModel[] = await userUseCase.getPage(1);
    res.json(result);
  }

  async insert(req: Request, res: Response) {
    const user: Partial<UserModel> = {
      name: 'Andrea',
      email: ' correo03@correo.com',
      password: '123',
      roles: ['MEDIC'],
      photo: 'andrea.jpg',
    };
    const newUser: UserModel = await userUseCase.insert(user);
    res.json(newUser);
  }
}
