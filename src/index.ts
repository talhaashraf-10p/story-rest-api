import * as dotenv from 'dotenv';
import 'dotenv/config';

import express, { Application } from 'express';

import { routes } from './routes';
import { connectDB, connection } from './utils/connection';

dotenv.config();

//App
const app: Application = express();

//middlewares
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

//DB
connectDB();
connection();

app.listen(process.env.PORT, () =>
	console.log(`listening on port ${process.env.PORT}`)
);
