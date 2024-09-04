/**
 * Taks Store
 */

import { create, StateCreator } from 'zustand';
import { TaskI, TaskStatus } from "../../interfaces";

interface TaskState {
    tasks: Record<string, TaskI>; //* -> { [key: string]: TaskI }

    getTaskByStatus: (status: TaskStatus) => TaskI[];
}

const TaskStoreApi: StateCreator<TaskState> = (set, get) => ({
    //* Store
    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'task 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'task 2', status: 'in-progress' },
        'ABC-3': { id: 'ABC-3', title: 'task 3', status: 'in-progress' },
        'ABC-4': { id: 'ABC-4', title: 'task 4', status: 'block' }
    },

    //* Actions 
    getTaskByStatus: (status: TaskStatus) =>  {
        const task = get().tasks;
        return Object.values(task).filter(taks => taks.status === status);
    },
});

export const useTaskStore = create<TaskState>()(TaskStoreApi);
