/**
 * Person state
 */
import { type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';

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
const storeApi: StateCreator<PersonState & ActonsState> = (set) => ({
    //!Atributes
    firstName: '',
    lastName: '',

    //! ACTIONS
    setFirstName: (value: string) => set(state => ({ firstName: value })),
    setLastName: (value: string) => set(state => ({ lastName: value })),
})

export const usePersonStore = create<PersonState & ActonsState>()(
    persist(
        storeApi //* -> Pongo mi declaracion de mi store aqui 
        ,
        //! Parametro para la key donde se guardara en localStorage por defecto
        {
            name: 'person-store'
        }
    )
); 