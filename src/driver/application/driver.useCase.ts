import {
  ResultRepository,
  TraceOptions,
} from '@shared/application/result.repository';
import { DriverModel } from '../domain/driver.model';
import { DriverRepository } from './driver.repository';
import { generateTrace } from '@shared/helpers/trace';
import { DriverResponseDto, mappingDriverDto } from './driver.dto';
import { ResponseDto } from '@shared/helpers/response.dto';

export class DriverUseCase {
  constructor(private driverInterface: DriverRepository) {}

  async list(): Promise<ResultRepository<DriverResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'List - DriverUseCase',
    };

    const result = await this.driverInterface.list();
    const resultMapped = mappingDriverDto(result);

    return ResponseDto.format<DriverResponseDto>(trace, resultMapped);
  }
  async getOne(id: number): Promise<ResultRepository<DriverResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'GetOne - DriverUseCase',
    };

    const medic = await this.driverInterface.getOne(id);

    const medicMapped = mappingDriverDto(medic);

    return ResponseDto.format<DriverResponseDto>(trace, medicMapped);
  }
  async getPage(page: number) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'GetPage - DriverUseCase',
    };

    const users = await this.driverInterface.getPage(page);

    const resultMapped = mappingDriverDto(users);

    return ResponseDto.format<DriverResponseDto>(trace, resultMapped);
  }
  async insert(entity: DriverModel) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Insert - DriverUseCase',
    };

    const newUser = { ...entity };

    const medicCreated = await this.driverInterface.insert(
      newUser as DriverModel
    );

    const resultMapped = mappingDriverDto(medicCreated);

    return ResponseDto.format<DriverResponseDto>(trace, resultMapped);
  }
  async update(id: number, entity: DriverModel) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Update - DriverUseCase',
    };

    const medicUpdated = await this.driverInterface.update(id, entity);

    const resultMapped = mappingDriverDto(medicUpdated);

    return ResponseDto.format<DriverResponseDto>(trace, resultMapped);
  }
  async delete(id: number) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Delete - DriverUseCase',
    };

    const medicDeleted = await this.driverInterface.delete(id);

    const resultMapped = mappingDriverDto(medicDeleted);

    return ResponseDto.format<DriverResponseDto>(trace, resultMapped);
  }
}
