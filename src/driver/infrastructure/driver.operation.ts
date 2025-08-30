import { DriverModel } from '@driver/domain/driver.model';
import { BaseRepository } from '@shared/application/base.repository';

export class DriverOperation
  implements BaseRepository<DriverModel, DriverModel>
{
  list(): Promise<DriverModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'David',
        lastname: 'Huamaccto',
        isoCountry: 'PE',
        driverLicense: '70871076',
      },
    ]);
  }
  getOne(id: number): Promise<DriverModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      isoCountry: 'PE',
      driverLicense: '70871076',
    });
  }
  getPage(page: number): Promise<DriverModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'David',
        lastname: 'Huamaccto',
        isoCountry: 'PE',
        driverLicense: '70871076',
      },
    ]);
  }
  insert(entity: Partial<DriverModel>): Promise<DriverModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      isoCountry: 'PE',
      driverLicense: '70871076',
    });
  }
  update(id: number, entity: Partial<DriverModel>): Promise<DriverModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      isoCountry: 'PE',
      driverLicense: '70871076',
    });
  }
  delete(id: number): Promise<DriverModel> {
    return Promise.resolve({
      id: 1,
      name: 'David',
      lastname: 'Huamaccto',
      isoCountry: 'PE',
      driverLicense: '70871076',
    });
  }
}
