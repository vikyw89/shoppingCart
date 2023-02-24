import { useSyncExternalStore } from 'react';
import { Database } from './database';

export class DatabaseStore {
    static #listeners = []

    static subscribe = (listener) => {
        this.#listeners = [...this.#listeners, listener];
        return () => {
          this.#listeners = this.#listeners.filter(l => l !== listener);
        };
    }
    static getSnapshot = () => {
        const snapShot = Database.readProduct()
        return snapShot
    }
    static emitChange = () => {
        for (let listener of this.#listeners) {
            listener();
        }
    }
    static read = (id) => {
        return Database.readProduct(id)
    }
    static create = (newContent) => {
        Database.createProduct(newContent)
        this.emitChange()
    }
    static update = (id, updatedItem) => {
        Database.updateProduct(id, updatedItem)
        this.emitChange()
    }
    static delete = (id) => {
        Database.deleteProduct(id)
        this.emitChange()
    }
}

export const useDatabase = () => {
    const database = useSyncExternalStore(DatabaseStore.subscribe, DatabaseStore.getSnapshot)
    return database
} 
