export class ShoppingCart {
    static #content = []

    static create = (newContent) => {
        this.#content = [...this.#content, newContent]
    }

    static read = (id) => {
        if (id) {
            const [output] = this.#content.filter(item=>{
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

    static subTotal = () => {
        const output = this.#content.reduce((acc, cur)=>{
            return acc + +item.quantity * +item.price
        },0)
        return output
    }
}