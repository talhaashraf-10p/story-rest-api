import express from 'express';
import defaultRoute from './default';
import registerRoute from './register';

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(registerRoute);
