import mongoose, { Error } from 'mongoose';
import { MONGODB_URI } from './secrets';

export function connectDB(): void {
	mongoose.connect(
		`mongodb://${MONGODB_URI}`,
		{
			autoCreate: true,
			keepAlive: true,
			connectTimeoutMS: 3000,
		},
		() => console.log('connected')
	);
}

export function connection(): void {
	const { connection } = mongoose;

	//connected
	connection.on('connected', () => {
		console.log('Mongo Connection Established');
	});

	//reconnected
	connection.on('reconnected', () => {
		console.log('Mongo Connection Reestablished');
	});

	//disconnected
	connection.on('disconnected', () => {
		console.log('Mongo Connection DISCONNECTED');
		console.log('Trying to reconnect');

		setTimeout(connectDB, 3000);
	});

	//close
	connection.on('close', () => {
		console.log('Mongo Connection Closed');
	});

	//error
	connection.on('error', (err: Error) => {
		console.log('Mongo Connection ERROR', err);
	});
}
