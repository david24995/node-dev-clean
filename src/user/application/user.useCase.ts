import { UserModel } from '@user/domain/user.model';
import { UserRepository } from '@user/application/user.repository';
import { UserService } from '@user/application/user.service';
import { ResponseDto } from '@shared/helpers/response.dto';
import { ResultRepository } from '@shared/application/result.repository';

export class UserUseCase {
  constructor(private operation: UserRepository) {}

  async list(): Promise<ResultRepository<UserModel>> {
    const result = await this.operation.list();

    return ResponseDto.format<UserModel>('345234', result);
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
