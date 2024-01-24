import router from './routes/index.js';
import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(json())

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App ready in http://localhost:${port}`)
})