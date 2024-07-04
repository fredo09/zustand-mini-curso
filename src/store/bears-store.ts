/*
* Declaracion del state usando zustand
*/

import { create } from 'zustand'

interface BearState {
    blackbears: number;
    pandaBears: number;
    polarBears: number;
    increase: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
    blackbears: 10, //* Properties del estado
    pandaBears: 5,
    polarBears: 2,


    //* Acciones del tendra el estado para modificar su store
    increase: (by: number) => set((state) => ({ blackbears: state.blackbears + by })),
}));
