import { BaseRepository } from '@shared/application/base.repository';
import { MedicModel } from '@medic/domain/medic.model';
import { MedicResponseDto } from './medic.dto';

export interface MedicRepository
  extends BaseRepository<MedicModel, MedicModel> {}
