/*
* Declaracion del state usando zustand
*/

import { create } from 'zustand';

interface Bear {
    id: number,
    name: string,
}

interface BearState {
    blackbears: number;
    pandaBears: number;
    polarBears: number;

    bears: Bear[];

    //* Actions
    increase: (by: number) => void;
    increasePolar: (by: number) => void;
    increasePanda: (by: number) => void;

    doNothing: () => void;
}

export const useBearStore = create<BearState>()((set) => ({
    blackbears: 10, //* Properties del estado
    pandaBears: 5,
    polarBears: 2,

    bears: [ { id: 1, name: 'Bears # 1' } ],


    //* Acciones del tendra el estado para modificar su store
    increase: (by: number) => set((state) => ({ blackbears: state.blackbears + by })),
    increasePolar: (by: number) => set(state => ({ polarBears: state.polarBears + by })),
    increasePanda: (by: number) => set((state) => ({ pandaBears : state.pandaBears + by })),


    doNothing: () => set(( state ) => ({ bears: [...state.bears] }))

}));
