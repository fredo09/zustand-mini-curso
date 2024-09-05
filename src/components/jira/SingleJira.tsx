import { IoReorderTwoOutline } from 'react-icons/io5';
import { TaskI } from '../../interfaces';
import { useTaskStore } from '../../store';


interface Props {
    task: TaskI;
}

export const SingleJira = ({ task }: Props) => {
    console.log("🚀 ~ SingleJira ~ task:", task);

    const setDragging = useTaskStore( state => state.setDraggingTaskId );
    const removeDraggin = useTaskStore( state => state.removeDragginTaskId );

    return (
        <div
            draggable
            onDragStart={() => setDragging(task.id) }
            onDragEnd={removeDraggin} 
            className="mt-5 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
                <p className="text-base font-bold text-navy-700">
                    { task.title }
                </p>
            </div>
            <span className=" h-6 w-6 text-navy-700 cursor-pointer">
                <IoReorderTwoOutline />
            </span>
        </div>
    )
}
