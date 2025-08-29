import { UserModel } from '@user/domain/user.model';
import { UserRepository } from '@user/application/user.repository';
import { generateTrace } from '@shared/helpers/trace';
import {
  ResultRepository,
  TraceOptions,
} from '@shared/application/result.repository';
import { ResponseDto } from '@shared/helpers/response.dto';
import { UserService } from '@user/application/user.service';
import { mappingUserDto, UserResponseDto } from '@user/application/user.dto';

export class UserUseCase {
  constructor(private operation: UserRepository) {}

  async list(): Promise<ResultRepository<UserResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'List - UserUseCase',
    };
    const result = await this.operation.list();

    const resultMapped = mappingUserDto(result);

    return ResponseDto.format<UserResponseDto>(trace, resultMapped);
  }
  async insert(
    user: Partial<UserModel>
  ): Promise<ResultRepository<UserResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Insert - UserUseCase',
    };

    const newUser = { ...user };
    newUser.password = await UserService.cryptPassword(
      String(newUser.password)
    );

    const userCreated = await this.operation.insert(newUser as UserModel);

    const resultMapped = mappingUserDto(userCreated);

    return ResponseDto.format<UserResponseDto>(trace, resultMapped);
  }

  async getOne(id: number): Promise<ResultRepository<UserResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'getOne - UserUseCase',
    };

    const result = await this.operation.getOne(id);

    const resultMapped = mappingUserDto(result);

    return ResponseDto.format<UserResponseDto>(trace, resultMapped);
  }

  async update(
    id: number,
    user: Partial<UserModel>
  ): Promise<ResultRepository<UserResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Update - UserUseCase',
    };

    const userUpdated = await this.operation.update(id, user);

    const resultMapped = mappingUserDto(userUpdated);

    return ResponseDto.format<UserResponseDto>(trace, resultMapped);
  }

  async delete(id: number): Promise<ResultRepository<UserResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Delete - UserUseCase',
    };

    const userDeleted = await this.operation.delete(id);

    return ResponseDto.format<UserResponseDto>(trace, userDeleted);
  }

  async getPage(page: number): Promise<ResultRepository<UserResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'GetPage - UserUseCase',
    };

    const users = await this.operation.getPage(page);

    const resultMapped = mappingUserDto(users);

    return ResponseDto.format<UserResponseDto>(trace, resultMapped);
  }
}
