export class ShoppingCart {
    static #content = []

    static create = (newContent) => {
        const newItem = {
            image:newContent.images[0],
            name:newContent.name,
            id:newContent.id,
            quantity:1,
            price:newContent.price,
        }
        if (this.#content.filter(el=> el.name === newItem.name).length === 1) {
            this.#content = this.#content.map(el=>{
                if (el.name === newItem.name) {
                    el.quantity++
                    return el
                } else {
                    return el
                }
            })
        } else {
            this.#content = [...this.#content, newItem]
        }
    }

    static read = (id) => {
        if (id) {
            const output = this.#content.filter(item=>{
                return item.id === id
            })
            return output
        } else {
            return this.#content
        }
    }

    static update = (id, updatedItem) => {
        const updatedContent = this.#content.map(item=>{
            if (item.id === id) {
                return updatedItem
            } else {
                return item
            }
        })
        this.#content = updatedContent
    }

    static delete = (id) => {
        this.#content = this.#content.filter(item=>{
            return item.id !== id
        })
    }

    static total = () => {
        const output = this.#content.reduce((acc, cur)=>{
            return acc + (+cur.quantity * +cur.price)
        },0)
        return output
    }
}