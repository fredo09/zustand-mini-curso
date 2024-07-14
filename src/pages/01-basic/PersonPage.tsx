import { WhiteCard } from '../../components';
import { usePersonStore } from '../../store';


export const PersonPage = () => {

  //! Al usar zustand siempre sera de forma granular para obtener propiedades del store
  const firstNameStore = usePersonStore( state => state.firstName );
  const lastNameStore = usePersonStore( state => state.lastName );

  // * Actions
  const setFirstNameStore = usePersonStore( state => state.setFirstName );
  const setLastNameStore = usePersonStore( state => state.setLastName );

  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Primer Nombre"
                    value={firstNameStore}
                    onChange={(e) => setFirstNameStore(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Apellido"
                    value={lastNameStore}
                    onChange={(e) => setLastNameStore(e.target.value)}
                  />
                </div>
              </div>
            </div>
  
            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {
                JSON.stringify({
                  firstName: firstNameStore,
                  lastName: lastNameStore
                }, null, 2)
              }
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};