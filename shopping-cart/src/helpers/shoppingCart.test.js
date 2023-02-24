import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('ShoppingCart =>', ()=>{
    let ShoppingCart
    beforeEach(async () => {
        vi.resetModules()
        const mod = await import('./shoppingCart')
        ShoppingCart = mod.ShoppingCart
    });

    it('create =>', ()=>{
        ShoppingCart.create({test:'test'})
        expect(ShoppingCart.read()).toEqual([{test:'test'}])
    })
    it('read =>', ()=>{
        expect(ShoppingCart.read()).toEqual([])
    })
    it('update =>', ()=>{
        ShoppingCart.create({id:1,test:'test'})
        ShoppingCart.update(1,{id:1, updated:'true'})
        expect(ShoppingCart.read(1)).toEqual({id:1,updated:'true'})
    })
    it('delete=>', ()=>{
        
    })
})