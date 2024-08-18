export interface Task {
    id:number;
    title: string;
    completed: boolean;
    labels: number[];  //Array of Label IDs
}

export const tasks: Task[] = [];