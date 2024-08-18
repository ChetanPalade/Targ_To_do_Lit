import express from 'express';
import taskRoutes from './routes/tasks';
import labelRoutes from './routes/labels';

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/labels', labelRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
