import { Request, Response } from 'express';

import { DriverRepository } from '@driver/application/driver.repository';
import { DriverUseCase } from '@driver/application/driver.useCase';
import { DriverOperation } from '@driver/infrastructure/driver.operation';

const driverOperation: DriverRepository = new DriverOperation();
const driverUseCase = new DriverUseCase(driverOperation);

export class DriverController {
  async list(req: Request, res: Response) {
    const drivers = await driverUseCase.list();

    res.json(drivers);
    1;
  }

  async getOne(req: Request, res: Response) {
    const driver = await driverUseCase.getOne(1);
    res.json(driver);
  }
}
