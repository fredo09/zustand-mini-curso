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

    computedBears: {
        totalBears: number
    };

    //* Actions
    increase: (by: number) => void;
    increasePolar: (by: number) => void;
    increasePanda: (by: number) => void;

    doNothing: () => void;
    addBear: () => void;
    clearBear: () => void;
}

/*
 * Aqui tenemos dos metodos "set" y "get" esto para poder manipular el state
 * en Zustand
 */

export const useBearStore = create<BearState>()((set, get) => ({
    blackbears: 10, //* Properties del estado
    pandaBears: 5,
    polarBears: 2,

    bears: [{ id: 1, name: 'Bears # 1' }],


    computedBears: {
        get totalBears() {
            return get().blackbears + get().pandaBears + get().polarBears + get().bears.length
        }
    },


    //* Acciones del tendra el estado para modificar su store
    increase: (by: number) => set((state) => ({ blackbears: state.blackbears + by })),
    increasePolar: (by: number) => set(state => ({ polarBears: state.polarBears + by })),
    increasePanda: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),


    doNothing: () => set((state) => ({ bears: [...state.bears] })),
    addBear: () => set((state) => ({
        bears: [...state.bears, { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` }]
    })),
    clearBear: () => set({ bears: [] })
}));
