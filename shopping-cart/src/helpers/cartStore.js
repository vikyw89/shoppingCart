import { useSyncExternalStore } from 'react';
import { ShoppingCart } from './shoppingCart';

let listeners = [];

export const useCart = () => {
    const cart = useSyncExternalStore(subscribe, getSnapshot)
    return cart
}

function getSnapshot() {
    return ShoppingCart.read()
}

function subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
        listeners = listeners.filter(l => l !== listener);
    };
}