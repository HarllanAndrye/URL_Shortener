import express from 'express';
import linksRouter from './routes/links';

const app = express();

app.use(express.json()); // Informa que a aplicação está usando o formato JSON
app.use(linksRouter);

export default app;