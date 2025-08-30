import { Router } from 'express';
import { DriverController } from './driver.controller';

const router = Router();

const driverController = new DriverController();

router.route('/').get(driverController.list);
router.route('/:id').get(driverController.getOne);

export default router;
