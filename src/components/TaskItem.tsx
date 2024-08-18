import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
    task: Task;
    toggleTaskCompletion: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.title}</span>
            <div>
                {task.labels.map(label => <span key={label} className="label">{label}</span>)}
                <button onClick={() => toggleTaskCompletion(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
