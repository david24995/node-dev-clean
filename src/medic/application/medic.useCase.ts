import { MedicRepository } from '@medic/application/medic.repository';
import {
  ResultRepository,
  TraceOptions,
} from '@shared/application/result.repository';
import {
  mappingMedicDto,
  MedicResponseDto,
} from '@medic/application/medic.dto';
import { generateTrace } from '@shared/helpers/trace';
import { ResponseDto } from '@shared/helpers/response.dto';
import { MedicModel } from '@medic/domain/medic.model';

export class MedicUseCase {
  constructor(private medicRepository: MedicRepository) {}

  async list(): Promise<ResultRepository<MedicResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'List - MedicUseCase',
    };

    const result = await this.medicRepository.list();
    const resultMapped = mappingMedicDto(result);

    return ResponseDto.format<MedicResponseDto>(trace, resultMapped);
  }
  async getOne(id: number): Promise<ResultRepository<MedicResponseDto>> {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'GetOne - MedicUseCase',
    };

    const medic = await this.medicRepository.getOne(id);

    const medicMapped = mappingMedicDto(medic);

    return ResponseDto.format<MedicResponseDto>(trace, medicMapped);
  }
  async getPage(page: number) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'GetPage - MedicUseCase',
    };

    const users = await this.medicRepository.getPage(page);

    const resultMapped = mappingMedicDto(users);

    return ResponseDto.format<MedicResponseDto>(trace, resultMapped);
  }
  async insert(entity: MedicModel) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Insert - MedicUseCase',
    };

    const newUser = { ...entity };

    const medicCreated = await this.medicRepository.insert(
      newUser as MedicModel
    );

    const resultMapped = mappingMedicDto(medicCreated);

    return ResponseDto.format<MedicResponseDto>(trace, resultMapped);
  }
  async update(id: number, entity: MedicModel) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Update - MedicUseCase',
    };

    const medicUpdated = await this.medicRepository.update(id, entity);

    const resultMapped = mappingMedicDto(medicUpdated);

    return ResponseDto.format<MedicResponseDto>(trace, resultMapped);
  }
  async delete(id: number) {
    const traceId: string = generateTrace();
    const trace: TraceOptions = {
      id: traceId,
      channelId: 1,
      name: 'Delete - MedicUseCase',
    };

    const medicDeleted = await this.medicRepository.delete(id);

    const resultMapped = mappingMedicDto(medicDeleted);

    return ResponseDto.format<MedicResponseDto>(trace, resultMapped);
  }
}
