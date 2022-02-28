import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'
import ItemsRoute from './src/routes/ItemsRoute';

dotenv.config({path: '.env'});

const {
  APP_ORIGIN,
  APP_HEADERS,
} = process.env;

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', APP_ORIGIN);
    res.header('Access-Control-Allow-Headers', APP_HEADERS);
    next();
});

app.use(express.json());
app.use('/items', ItemsRoute);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));