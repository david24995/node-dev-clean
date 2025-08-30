import { BaseRepository } from '@shared/application/base.repository';
import { UserModel } from '@user/domain/user.model';
import { UserRequestDto } from './user.dto';

export interface UserRepository
  extends BaseRepository<UserModel, UserRequestDto> {}
