import { Router } from 'express';
import { labels, Label } from '../models/labelModel';

const router = Router();

// Get all labels
router.get('/', (req, res) => {
    res.json(labels);
});

// Create a new label
router.post('/', (req, res) => {
    const { name } = req.body;

    const newLabel: Label = {
        id: labels.length + 1,
        name
    };

    labels.push(newLabel);
    res.status(201).json(newLabel);
});

export default router;
