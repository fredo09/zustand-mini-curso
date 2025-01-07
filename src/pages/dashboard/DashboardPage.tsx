import { WhiteCard } from '../../components';
import { useBearStore, usePersonStore, useTaskStore } from '../../store';
import { IoAccessibilityOutline, 
  IoHeartOutline, 
  IoListOutline, 
  IoLockClosedOutline, 
  IoPawOutline 
} from 'react-icons/io5';

export const Dashboard = () => {

  const totalBears = useBearStore(state => state.totalBears);
  const totalTask = useTaskStore(state => state.totalTaks);

  const namePerson = usePersonStore(state => state.firstName);
  const lastNamePerson = usePersonStore(state => state.lastName);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <WhiteCard centered>
          <IoPawOutline size={ 50 } className="text-indigo-600" />
          <h2>Osos</h2>
          <p>N. Osos {totalBears()}</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoAccessibilityOutline size={ 50 } className="text-indigo-600" />
          <h2>Persona</h2>
          <p>{`${namePerson} ${lastNamePerson}`}</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoListOutline size={ 50 } className="text-indigo-600" />
          <h2>Tareas</h2>
          <p>N. Tasks: {totalTask()}</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoHeartOutline size={ 50 } className="text-indigo-600" />
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>


        <WhiteCard centered>
          <IoLockClosedOutline size={ 50 } className="text-indigo-600" />
          <h2>Auth</h2>
          <p>Información</p>
        </WhiteCard>
      </div>
    </>
  );
};