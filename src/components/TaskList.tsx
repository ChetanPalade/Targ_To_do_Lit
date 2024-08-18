import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
    tasks: Task[];
    toggleTaskCompletion: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    toggleTaskCompletion={toggleTaskCompletion} 
                />
            ))}
        </div>
    );
};

export default TaskList;
