import { UserModel } from '@user/domain/user.model';
import { UserRepository } from './user.repository';
import { generateTrace } from '@shared/helpers/trace';
import {
  ResultRepository,
  TraceOptions,
} from '@shared/application/result.repository';
import { ResponseDto } from '@shared/helpers/response.dto';
import { UserService } from './user.service';

export class UserUseCase {
  constructor(private operation: UserRepository) {}

  async list(): Promise<ResultRepository<UserModel>> {
    const traceId: string = generateTrace();
    const result = await this.operation.list();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'List - UserUseCase',
    };

    return ResponseDto.format<UserModel>(trace, result);
  }
  async insert(user: Partial<UserModel>): Promise<UserModel> {
    const newUser = { ...user };
    newUser.password = await UserService.cryptPassword(
      String(newUser.password)
    );

    return await this.operation.insert(newUser as UserModel);
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
