import express from 'express';
import userRoutes from '@user/adapter/user.routes';
import medicRoutes from '@medic/adapter/medic.routes';

export const app = express();

app.use('/users', userRoutes);
app.use('/medics', medicRoutes);
