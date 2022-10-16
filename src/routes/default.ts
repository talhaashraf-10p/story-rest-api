import { Router, Request, Response } from 'express';

const defaultRoute = Router();

defaultRoute.post('/', (req: Request, res: Response) => {
	res.send('story api version 1');
});

export default defaultRoute;
