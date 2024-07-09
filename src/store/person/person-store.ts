/**
 * Person state
 */
import { create } from 'zustand';
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

export const usePersonStore = create<PersonState & ActonsState>()(
    persist(
        (set) => ({
            firstName: '',
            lastName: '',

            //! ACTIONS
            setFirstName: (value: string) => set(state => ({ firstName: value })),
            setLastName: (value: string) => set(state => ({ lastName: value })),
        }),
        //! Parametro para la key donde se guardara en localStorage por defecto
        {
            name: 'person-store'
        }
    )
); 