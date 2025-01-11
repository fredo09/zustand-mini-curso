//Confirm Slice
import { StateCreator } from "zustand";

export interface ConfirmSlice {
    isConfirm: boolean;
    setConfirm: (value: boolean) => void;
}

export const createConfirmSlice: StateCreator<ConfirmSlice> = (set) => ({
    isConfirm: false,
    setConfirm: (value: boolean) => set({ isConfirm: value })
})
