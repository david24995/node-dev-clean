import { MedicResponseDto } from '@medic/application/medic.dto';
import { MedicModel } from '@medic/domain/medic.model';
import { BaseRepository } from '@shared/application/base.repository';

export class MedicOperation
  implements BaseRepository<MedicModel, MedicResponseDto>
{
  list(): Promise<MedicModel[]> {
    return Promise.resolve([
      { id: 1, name: 'David', lastname: 'Huamaccto', identifier: '70871076' },
    ]);
  }
  getOne(id: number): Promise<MedicModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      identifier: '70871076',
    });
  }
  getPage(page: number): Promise<MedicModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'David',
        lastname: 'Huamaccto',
        identifier: '70871076',
      },
    ]);
  }
  insert(entity: Partial<MedicModel>): Promise<MedicModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      identifier: '70871076',
    });
  }
  update(id: number, entity: Partial<MedicModel>): Promise<MedicModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      identifier: '70871076',
    });
  }
  delete(id: number): Promise<MedicModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      identifier: '70871076',
    });
  }
}
