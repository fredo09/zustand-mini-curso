import { JiraTasks } from '../../components';
import { useTaskStore } from '../../store';

export const JiraPage = () => {
  const progressTaskStore = useTaskStore(state => state.getTaskByStatus('in-progress'));
  const doneTaskStore = useTaskStore(state => state.getTaskByStatus('done'));
  const openTaskStore = useTaskStore(state => state.getTaskByStatus('open'));


  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title='Abiertas' tasks={openTaskStore} valueStatus='open' />
        <JiraTasks title='Avanzando' tasks={progressTaskStore} valueStatus='in-progress' />
        <JiraTasks title='Terminadas' tasks={doneTaskStore} valueStatus='done' />
      </div>
    </>
  );
};