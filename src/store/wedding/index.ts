import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person-slice";

//Create store
export const useWeddingBoundStore = create<PersonSlice>()(
    (...a) => ({
        ...createPersonSlice(...a),
    })
)