import { useSyncExternalStore } from 'react';
import { ShoppingCart } from './shoppingCart';

let listeners = [];

export const useCart = () => {
    const cart = useSyncExternalStore(subscribe, getSnapshot)
    return cart
}

function getSnapshot() {
    return ShoppingCart
}

function subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
        listeners = listeners.filter(l => l !== listener);
    };
}

function emitChange() {
    for (let listener of listeners) {
      listener();
    }
}

export const CartStore = () => {
    const create = ShoppingCart.create()
    emitChange()
    return (
        method
    )
}