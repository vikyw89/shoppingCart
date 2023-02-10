import { describe, expect, it } from 'vitest'
import { Database } from './database'

describe('database =>', ()=>{
    it('createProduct =>', ()=>{
        Database.createProduct({ images:'', name:'MeowFood', description:'A delicious cat food', variants:{}})
        console.log(Database.readProduct())
        expect(Database.readProduct().length === 1).toBe(true)
    })
})