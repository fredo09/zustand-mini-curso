import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person-slice";
import { createGuestSlice, GuestSlice } from './guest-slice';
import { createDateSlice, DateSlice } from "./date-slice";
import { createConfirmSlice, ConfirmSlice } from "./confirmation-slice";
import { devtools } from "zustand/middleware";

//* Combine slices
type SharedSlice = PersonSlice & GuestSlice & DateSlice & ConfirmSlice;

//Create store
export const useWeddingBoundStore = create<SharedSlice>()(
    devtools(
        (...a) => ({
            ...createPersonSlice(...a),
            ...createGuestSlice(...a),
            ...createDateSlice(...a),
            ...createConfirmSlice(...a),
        })
    )
)