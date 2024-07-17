import { StateStorage, createJSONStorage } from "zustand/middleware";


//*  add url api firebase data base
const firebaseUrl = 'https://zustand-store-react-default-rtdb.firebaseio.com/zustand';

/**
 * Session store config 
 */
const apiSessionStore: StateStorage = {

    getItem: async function (name: string):  Promise<string | null>{
        console.log("🚀 ~ get Item:", name);

        try {

            const data =  await fetch(`${firebaseUrl}/${name}.json`)
                .then( response => response.json() );
        
            return JSON.stringify(data);

        } catch (error) {
            console.log("🚀 ~ Ocurrio un error:", error);
            
            throw Error;
        }
    },

    setItem: async function (name: string, value: string): Promise<void> {
        // console.log("🚀 ~ set Item:", { name, value });
        const data = await fetch(`${firebaseUrl}/${name}.json`, {
            method: 'PUT',
            body: value
        }).then(response => response.json());
        
        console.log("🚀 ~ data:", data)
        //sessionStorage.setItem(name, value);
        return;
    },

    removeItem: function (name: string): Promise<void> | void {
        console.log("🚀 ~ remove Item: ", name);
    }
}


//! Exportando configuracion de session store in zustand
export const firebaseSessionStore = createJSONStorage(() => apiSessionStore);