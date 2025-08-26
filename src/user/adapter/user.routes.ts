import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
const userController = new UserController();

router.route('/').get(userController.list).post(userController.insert);
router
  .route('/:id')
  .get(userController.getOne)
  .put(userController.update)
  .delete(userController.delete);
router.route('/page/:page').get(userController.getPage);

export default router;
