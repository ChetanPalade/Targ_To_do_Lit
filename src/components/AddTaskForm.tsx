import React, { useState } from 'react';
import { Label } from '../types';

interface AddTaskFormProps {
    addTask: (title: string, labelIds: number[]) => void;
    labels: Label[];
    addLabel: (labelName: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask, labels, addLabel }) => {
    const [title, setTitle] = useState('');
    const [selectedLabels, setSelectedLabels] = useState<number[]>([]);
    const [newLabel, setNewLabel] = useState('');

    const handleAddTask = () => {
        if (title.trim()) {
            addTask(title, selectedLabels);
            setTitle('');
            setSelectedLabels([]);
        }
    };

    const handleAddLabel = () => {
        if (newLabel.trim()) {
            addLabel(newLabel);
            setNewLabel('');
        }
    };

    const handleLabelChange = (labelId: number) => {
        setSelectedLabels(prev => 
            prev.includes(labelId) ? prev.filter(id => id !== labelId) : [...prev, labelId]
        );
    };

    return (
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="Add a new task..." 
            />
            <div>
                {labels.map(label => (
                    <label key={label.id}>
                        <input 
                            type="checkbox" 
                            checked={selectedLabels.includes(label.id)} 
                            onChange={() => handleLabelChange(label.id)} 
                        />
                        {label.name}
                    </label>
                ))}
            </div>
            <button onClick={handleAddTask}>Add Task</button>
            <div>
                <input 
                    type="text" 
                    value={newLabel} 
                    onChange={e => setNewLabel(e.target.value)} 
                    placeholder="Add a new label..." 
                />
                <button onClick={handleAddLabel}>Add Label</button>
            </div>
        </div>
    );
};

export default AddTaskForm;
