import { BaseRepository } from '@shared/application/base.repository';
import { UserModel } from '@user/domain/user.model';

export interface UserRepository extends BaseRepository<UserModel> {}
