import { useState, DragEvent } from "react";
import { useTaskStore } from "../store";
import Swal from "sweetalert2";
import { TaskStatus } from "../interfaces";


interface Options {
  valueStatus: TaskStatus;
}

export const useTasks = ({ valueStatus }: Options) => {
  const [onDragOver, setonDragOver] = useState(false);

  const isDragging = useTaskStore((state) => !!state.draggingTaskId);
  const onTaskDrop = useTaskStore((state) => state.onDropTask);
  const addNewTask = useTaskStore((state) => state.addTask);

  const handleAddTask = async () => {
    const { isConfirmed, value: valueTask } = await Swal.fire({
      title: "Agrega una nueva tarea",
      input: "text",
      inputLabel: "Nombre de la tarea",
      inputPlaceholder: "Agrega la tarea",
      showCancelButton: true,
      inputValidator: (valueInput) => {
        if (!valueInput) {
          return "Debes de poner el nombre de la tarea";
        }
      },
    });

    if (!isConfirmed) return;
    addNewTask(valueTask, valueStatus);
  };

  const handleOnDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setonDragOver(true);
  };

  const handleOnDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setonDragOver(false);
  };

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setonDragOver(false);
    onTaskDrop(valueStatus);
  };

  return {
    isDragging,
    handleAddTask,
    handleOnDragLeave,
    handleOnDragOver,
    handleOnDrop,
    onDragOver,
  };
};
