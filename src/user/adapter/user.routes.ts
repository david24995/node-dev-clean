import { Request, Response, Router } from 'express';

const router = Router();

router
  .route('/')
  .get((req: Request, res: Response) => {
    res.json([
      { id: 1, name: 'David' },
      { id: 2, name: 'Pedro' },
    ]);
  })
  .post((req: Request, res: Response) => {
    res.status(201).send('User inserted');
  });

export default router;
