import { Router } from 'express';
import { tasks, Task } from '../models/taskModel';
import { labels } from '../models/labelModel';

const router = Router();

// Get all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// Create a new task
router.post('/', (req, res) => {
    const { title, labelIds } = req.body;

    const newTask: Task = {
        id: tasks.length + 1,
        title,
        completed: false,
        labels: labelIds
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task by ID
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);

    if (task) {
        const { title, completed, labelIds } = req.body;
        task.title = title ?? task.title;
        task.completed = completed ?? task.completed;
        task.labels = labelIds ?? task.labels;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

export default router;
