import { BaseRepository } from '@shared/application/base.repository';
import { MedicModel } from '@medic/domain/medic.model';

export interface MedicRepository extends BaseRepository<MedicModel> {}
