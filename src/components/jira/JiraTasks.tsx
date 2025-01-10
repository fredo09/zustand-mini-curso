import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { TaskI, TaskStatus } from '../../interfaces';
import { SingleJira } from './SingleJira';

import classNames from 'classnames';
import { useTasks } from '../../hooks/useTasks';

interface Props {
  title: string;
  tasks: TaskI[];
  valueStatus: TaskStatus;
}

export const JiraTasks = ({ title, valueStatus, tasks }: Props) => {
  //! custom hook
  const {
    handleAddTask,
    handleOnDragLeave,
    handleOnDrop,
    handleOnDragOver,
    isDragging,
    onDragOver
  } = useTasks({ valueStatus });

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