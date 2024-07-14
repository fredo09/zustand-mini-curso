import { StateStorage, createJSONStorage } from "zustand/middleware";

/**
 * Session store config 
 */
const apiSessionStore: StateStorage = {

    getItem: function (name: string): string | Promise<string | null> | null {
        console.log("🚀 ~ get Item:", name);

        const dataStore = sessionStorage.getItem(name);
        return dataStore;
    },

    setItem: function (name: string, value: string): void {
        // console.log("🚀 ~ set Item:", { name, value });
        sessionStorage.setItem(name, value);
    },

    removeItem: function (name: string): Promise<void> | void {
        console.log("🚀 ~ remove Item: ", name);
    }
}


//! Exportando configuracion de session store in zustand
export const customSessionStore = createJSONStorage( () => apiSessionStore ) ;