export const MONGODB_URI = process.env.MONGO_PATH;

if (!MONGODB_URI) {
	console.log(
		'no mongo connection string. Set MONGO_PATH environment variable'
	);
	process.exit(1);
}
