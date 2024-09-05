/**
 * Taks Store
 */

import { create, StateCreator } from 'zustand';
import { TaskI, TaskStatus } from "../../interfaces";
import { devtools } from 'zustand/middleware';

interface TaskState {

    draggingTaskId? : string;
    tasks: Record<string, TaskI>; //* -> { [key: string]: TaskI }

    getTaskByStatus: (status: TaskStatus) => TaskI[];

    //State for drag and drop tasks
    setDraggingTaskId: (taskId: string) => void,
    removeDragginTaskId: () => void,
}

const TaskStoreApi: StateCreator<TaskState> = (set, get) => ({
    //* Store
    draggingTaskId: undefined,
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

    //Dragg and drop
    setDraggingTaskId: (taskId: string) => {
        console.log("okey dragging and drop", taskId);
        set({ draggingTaskId: taskId });
    },
    removeDragginTaskId: () => {
        console.log("🚀 ~ remove task");
        set({ draggingTaskId: undefined });
    }
});

export const useTaskStore = create<TaskState>()(
    devtools(
        TaskStoreApi
    )
);
