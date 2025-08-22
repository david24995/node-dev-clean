import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.useCase';
import { UserModel } from '../domain/user.model';
import { UserOperation } from '../infrastructure/user.operation';
import { UserRepository } from '../application/user.repository';

const userOperation: UserRepository = new UserOperation();
const userUseCase = new UserUseCase(userOperation);

export class UserController {
  list(req: Request, res: Response) {
    const users: UserModel[] = userUseCase.list();

    res.json(users);
  }

  insert(req: Request, res: Response) {
    const user: Partial<UserModel> = {
      name: 'Andrea',
      email: ' correo03@correo.com',
      password: '123',
      roles: ['MEDIC'],
      photo: 'andrea.jpg',
    };
    const newUser: UserModel = userUseCase.insert(user);
    res.json(newUser);
  }
}
