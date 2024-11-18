import { DragEvent, useState } from 'react';
import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { TaskI, TaskStatus } from '../../interfaces';
import { SingleJira } from './SingleJira';
import { useTaskStore } from '../../store/taks/task.store';

import classNames from 'classnames';

interface Props {
  title: string;
  tasks: TaskI[];
  value: TaskStatus;
}

export const JiraTasks = ({ title, value, tasks }: Props) => {
  const [onDragOver, setonDragOver] = useState(false);

  const isDragging = useTaskStore( state => !!state.draggingTaskId );
  const onTaskDrop = useTaskStore( state => state.onDropTask );
  const addNewTask = useTaskStore( state => state.addTask )

  const handleAddTask = () => {
    addNewTask('Nueva tarea', value);
  }
  
  const handleOnDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("onDragOver", value);
    setonDragOver(true);
  }

  const handleOnDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("onDragLeave", value);
    setonDragOver(false);
  }

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("onDrop", value);
    setonDragOver(false);
    onTaskDrop(value);
  }

  return (
    <div 
      className={
        classNames("!text-black border-4 relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]", {
          "border-blue-500 border-dotted" : isDragging,
          "border-green-500 border-dotted" : isDragging && onDragOver
        })
      }
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}>
      
      {/* Task Header */ }
      <div className="relative flex flex-row justify-between">

        <div className="flex items-center justify-center">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={ { fontSize: '50px' } } />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{ title }</h4>
        </div>

        <button onClick={handleAddTask}>
          <IoAddOutline />
        </button>
      </div>

      {/* Task Items */ }
      <div className="h-full w-full">
        {
          tasks.map(task => (
            <SingleJira key={task.id} task={task}/>
          ))
        }
      </div>
    </div>
  );
};