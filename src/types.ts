export interface Task {
    id: number;
    title: string;
    completed: boolean;
    labels: string[];
}

export interface Label {
    id: number;
    name: string;
}
