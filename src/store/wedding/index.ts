import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person-slice";
import { createGuestSlice, GuestSlice } from './guest-slice';
import { devtools } from "zustand/middleware";

//* Combine slices
type SharedSlice = PersonSlice & GuestSlice;

//Create store
export const useWeddingBoundStore = create<SharedSlice>()(
    devtools(
        (...a) => ({
            ...createPersonSlice(...a),
            ...createGuestSlice(...a),
        })
    )
)