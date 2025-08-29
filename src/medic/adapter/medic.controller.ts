import { Request, Response } from 'express';

import { MedicResponseDto } from '@medic/application/medic.dto';
import { MedicRepository } from '@medic/application/medic.repository';
import { MedicUseCase } from '@medic/application/medic.useCase';
import { MedicOperation } from '@medic/infrastructure/medic.operation';
import { ResultRepository } from '@shared/application/result.repository';

const medicOperation: MedicRepository = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);

export class MedicController {
  async list(req: Request, res: Response) {
    const medics: ResultRepository<MedicResponseDto> =
      await medicUseCase.list();

    res.json(medics);
  }

  async getOne(req: Request, res: Response) {
    const medic = await medicUseCase.getOne(1);
    res.json(medic);
  }
}
