import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();

app.use(cors()); // Permitir que o front-end possa se comunicar com o back-end
app.use(express.json()); // Informa que a aplicação está usando o formato JSON
app.use(linksRouter);

export default app;