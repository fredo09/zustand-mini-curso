/**
 * Person state
 */
import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
//import { customSessionStore } from '../sessionStore/customSessionStore.store';
import { firebaseSessionStore } from '../sessionStore/firebaseStore.stote';

/**
 * Person State
 */
interface PersonState {
    firstName: string;
    lastName: string;
}

/**
 * Actions state
 */
interface ActonsState {
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
}

//! Separando el store con 
const storeApi: StateCreator<PersonState & ActonsState, [["zustand/devtools", never]]> = (set) => ({
    //!Atributes
    firstName: '',
    lastName: '',

    //! ACTIONS
    setFirstName: (value: string) => set(({ firstName: value }), false, 'setFirstName' ),
    setLastName: (value: string) => set(({ lastName: value }), false, 'setLastName'),
});


export const usePersonStore = create<PersonState & ActonsState>()(  
    devtools(
        persist(
            storeApi, //* -> Pongo mi declaracion de mi store aqui 
            //! Parametro para la key donde se guardara en localStorage por defecto
            {
                name: 'person-store',
                //storage: customSessionStore, //* -> Forma de crear el sesion store en zustand
                storage: firebaseSessionStore, //* -> usando con firebase
            }
        )
    )
);
