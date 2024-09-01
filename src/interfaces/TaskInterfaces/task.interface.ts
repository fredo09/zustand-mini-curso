/**
 * Task Interface
 */

export interface TaskI {
    id: string;
    title: string;
    status: TaskStatus;
}

export type TaskStatus = 'open' | 'in-progress' | 'block' | 'done';