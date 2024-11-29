import express from 'express';
import catRoutes from './routes/task.routes';

const cors = require('cors');
const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use('/api/tareas', catRoutes)

export default app;