import { Request, Response } from 'express';
import { UserUseCase } from '@user/application/user.useCase';
import { UserModel } from '@user/domain/user.model';
import { UserOperation } from '@user/infrastructure/user.operation';
import { UserRepository } from '@user/application/user.repository';
import { ResultRepository } from '@shared/application/result.repository';
import { UserResponseDto } from '@user/application/user.dto';

const userOperation: UserRepository = new UserOperation();
const userUseCase = new UserUseCase(userOperation);

export class UserController {
  async list(req: Request, res: Response) {
    const users: ResultRepository<UserResponseDto> = await userUseCase.list();

    res.json(users);
  }

  async getOne(req: Request, res: Response) {
    const user: ResultRepository<UserResponseDto> = await userUseCase.getOne(1);

    res.json(user);
  }

  async update(req: Request, res: Response) {
    const user: Partial<UserModel> = {
      photo: 'andrea2.jpg',
    };

    const result: ResultRepository<UserResponseDto> = await userUseCase.update(
      1,
      user
    );
    res.json(result);
  }

  async delete(req: Request, res: Response) {
    const result: ResultRepository<UserResponseDto> = await userUseCase.delete(
      1
    );
    res.json(result);
  }

  async getPage(req: Request, res: Response) {
    const result: ResultRepository<UserResponseDto> = await userUseCase.getPage(
      1
    );
    res.json(result);
  }

  async insert(req: Request, res: Response) {
    const user: Partial<UserModel> = {
      name: 'Andrea',
      email: ' correo03@correo.com',
      password: '123',
      roles: [{ id: 1, name: 'OPERATOR' }],
      photo: 'andrea.jpg',
    };
    const newUser: ResultRepository<UserResponseDto> = await userUseCase.insert(
      user
    );
    res.json(newUser);
  }
}
