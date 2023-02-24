import { useSyncExternalStore } from 'react';
import { ShoppingCart } from './shoppingCart';

export class CartStore {
    static #listeners = []

    static subscribe = (listener) => {
        this.#listeners = [...this.#listeners, listener];
        return () => {
          this.#listeners = this.#listeners.filter(l => l !== listener);
        };
    }
    static getSnapshot = () => {
        return ShoppingCart.read()
    }
    static emitChange = () => {
        for (let listener of this.#listeners) {
            listener();
        }
    }
    static create = (newContent) => {
        ShoppingCart.create(newContent)
        this.emitChange()
    }
    static update = (id, updatedItem) => {
        ShoppingCart.update(id, updatedItem)
        this.emitChange()
    }
    static delete = (id) => {
        ShoppingCart.delete(id)
        this.emitChange()
    }
    static subTotal = () => {
        return ShoppingCart.subTotal()
    }
}

export const useCart = () => {
    const cart = useSyncExternalStore(CartStore.subscribe, CartStore.getSnapshot)
    return cart
} 
