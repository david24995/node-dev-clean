import express, { Request, Response } from 'express';
import userRoutes from './user/adapter/user.routes';

export const app = express();

app.use('/users', userRoutes);
