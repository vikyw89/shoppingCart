import { useSyncExternalStore } from 'react';
import { Database } from './database';

let listeners = [];

export const useDatabase = () => {
    const database = useSyncExternalStore(subscribe, getSnapshot)
    return database
}

function getSnapshot() {
    return Database.readProduct()
}

function subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
        listeners = listeners.filter(l => l !== listener);
    };
}