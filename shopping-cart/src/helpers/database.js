import { v4 as uuidv4 } from 'uuid';
import productImage1 from '../assets/product0-0.webp'

export class Database {
    static #id = 0
    static #data = []

    static createProduct = ({ images, name, description, variants }) => {
        this.#data.push({
            id: this.#id++,
            images: images ?? '', 
            name: name ?? '', 
            description: description ?? '', 
            variants:variants ?? {}
        })
    }

    static readProduct = (id) => {
        if (id) {
            const output =  this.#data.filter(item=>{
                return item.id === +id
            })
            return output
        } else {
            return this.#data
        }
    }

    static deleteProduct = (id) => {
        this.#data.filter(item=>{
            return item.id !== id
        })
    }

    static updateProduct = (id, updatedProduct) => {
        this.#data.map(item=>{
            if (item.id === id) {
                return updatedProduct
            } else {
                return item
            }
        })
    }
}

// populate products in database

Database.createProduct({ images:productImage1, name:'Catnip', description:'The most delicious catnip in the galaxy', variants:{type:'XL', stock:99, price:2} })
Database.createProduct({ images:'../assets/product0-0.webp', name:'Fish', description:'The most delicious fish in the galaxy', variants:{type:'XL', stock:99, price:1} })
console.log(Database.readProduct())