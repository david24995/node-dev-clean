import { BaseRepository } from '@shared/application/base.repository';
import { DriverModel } from '../domain/driver.model';

export interface DriverRepository
  extends BaseRepository<DriverModel, DriverModel> {}
