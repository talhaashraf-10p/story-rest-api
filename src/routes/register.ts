import { Router, Request, Response } from 'express';
import { UserModel } from '../models/user';
import { body } from 'express-validator';
import { throwValidationErrors } from '../middlewares';

const registerRoute = Router();

registerRoute.use(
	body('email').isEmail().normalizeEmail(),
	body('password')
		.isLength({ min: 8, max: 16 })
		.withMessage('Atleast 8 characters & max 16')
);

registerRoute.use(throwValidationErrors);

registerRoute.post(
	'/register',

	(req: Request, res: Response) => {
		const { firstName, lastName, password, email } = req.body;

		UserModel.create({ firstName, lastName, password, email })
			.then(result => res.json(result))
			.catch(e => res.json(e));
	}
);

export default registerRoute;
