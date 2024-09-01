/**
 * Taks Store
 */

import { create, StateCreator } from 'zustand';
import { TaskI } from "../../interfaces";

interface TaskState {
    tasks: Record<string, TaskI> //* -> { [key: string]: TaskI }
}

const TaskStoreApi: StateCreator<TaskState> = (set) => ({
    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'task 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'task 2', status: 'done' },
        'ABC-3': { id: 'ABC-3', title: 'task 3', status: 'in-progress' },
        'ABC-4': { id: 'ABC-4', title: 'task 4', status: 'block' }
    }
});

export const useTaskStore = create<TaskState>()(TaskStoreApi);
