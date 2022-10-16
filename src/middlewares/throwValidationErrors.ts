import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export default function (
	req: Request,
	res: Response,
	next: NextFunction
): Response | undefined {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log('here');
		return res.status(400).json({
			errors: errors.mapped(),
		});
	} else {
		next();
	}
}
