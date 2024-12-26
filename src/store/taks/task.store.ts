/**
 * Taks Store
 */

import { create, StateCreator } from 'zustand';
import { TaskI, TaskStatus } from "../../interfaces";
import { devtools } from 'zustand/middleware';
import { v4 as uuidV4 } from 'uuid';
import { produce } from 'immer';

interface TaskState {

    draggingTaskId? : string;
    tasks: Record<string, TaskI>; //* -> { [key: string]: TaskI }

    getTaskByStatus: (status: TaskStatus) => TaskI[];

    addTask:(title: string, status: TaskStatus) => void;

    //State for drag and drop tasks
    setDraggingTaskId: (taskId: string) => void,
    removeDragginTaskId: () => void,

    // Change status task
    changeTaskStatus:(taskId: string, status: TaskStatus) => void,

    onDropTask: (status: TaskStatus) => void,
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

    addTask: (title: string, status: TaskStatus) => {
        const newTask = { id: uuidV4(), title, status };

        // * Forma usando produce immer
        set(produce((state: TaskState) => {
            // mutacion del estado
            state.tasks[newTask.id] = newTask;
        }));

        // * Forma base de mutar el nuevo estado 
        // set((state)=> ({
        //     tasks: {
        //         ...state.tasks,
        //         [newTask.id]: newTask
        //     }
        // }))
    },

    //Dragg and drop
    setDraggingTaskId: (taskId: string) => {
        console.log("okey dragging and drop", taskId);
        set({ draggingTaskId: taskId });
    },
    removeDragginTaskId: () => {
        set({ draggingTaskId: undefined });
    },
    changeTaskStatus: (taskId: string, status: TaskStatus) => {
        const task = get().tasks[taskId];
        task.status = status;

        set((state) => ({
            tasks: {
                ...state.tasks,
                [taskId]: task
            }
        }))
    },
    onDropTask: (status: TaskStatus) => {
        const taskId = get().draggingTaskId;
        if (!taskId) return;

        get().changeTaskStatus(taskId, status);
        get().removeDragginTaskId();
    }
});

export const useTaskStore = create<TaskState>()(
    devtools(
        TaskStoreApi
    )
);
