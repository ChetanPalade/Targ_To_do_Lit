import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import LabelFilter from './components/LabelFilter';
import { Task, Label } from './types';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [labels, setLabels] = useState<Label[]>([]);
    const [filteredLabels, setFilteredLabels] = useState<number[]>([]);

    const addTask = (title: string, labelIds: number[]) => {
        const newTask: Task = {
            id: tasks.length + 1,
            title,
            completed: false,
            labels: labelIds.map(id => labels.find(label => label.id === id)!.name)
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const addLabel = (labelName: string) => {
        const newLabel: Label = {
            id: labels.length + 1,
            name: labelName
        };
        setLabels([...labels, newLabel]);
    };

    const handleLabelFilter = (labelId: number) => {
        setFilteredLabels(prev => 
            prev.includes(labelId) ? prev.filter(id => id !== labelId) : [...prev, labelId]
        );
    };

    const filteredTasks = filteredLabels.length > 0 
        ? tasks.filter(task => 
            task.labels.some(label => filteredLabels.includes(labels.find(l => l.name === label)!.id))
          )
        : tasks;

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <AddTaskForm addTask={addTask} labels={labels} addLabel={addLabel} />
            <LabelFilter labels={labels} handleLabelFilter={handleLabelFilter} />
            <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
    );
};

export default App;
