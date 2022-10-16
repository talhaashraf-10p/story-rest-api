import { model, Model, Schema } from 'mongoose';
export interface IUser {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

const IUserSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			lowercase: true,
			index: true,
			unique: true,
		},
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		password: { type: String, required: true },
	},
	{ collection: 'user', timestamps: true }
);

export const UserModel: Model<IUser> = model('user', IUserSchema);
