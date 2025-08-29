import { Router } from 'express';
import { MedicController } from '@medic/adapter/medic.controller';

const router = Router();

const medicController = new MedicController();

router.route('/').get(medicController.list);
router.route('/:id').get(medicController.getOne);

export default router;
