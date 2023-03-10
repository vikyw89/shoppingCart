export class Database {
    static #id = 0
    static #data = []

    static createProduct = ({ images, name, description, stock, price }) => {
        this.#data = [...this.#data, {
            id: this.#id++,
            images: images ?? '', 
            name: name ?? '', 
            description: description ?? '', 
            stock: stock,
            price: price
        }]
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
        this.#data = this.#data.map(item=>{
            if (item.id === id) {
                return updatedProduct
            } else {
                return item
            }
        })
    }
}


const image1Paths = [];
//          note relative path vvv                 vvv this gets rid of promises
Object.values(import.meta.glob("../assets/1/*.*", { eager: true })).forEach(
  ({ default: path }) => {
    const url = new URL(path, import.meta.url);
    const data = url.pathname
    image1Paths.push(data);
  }
);

Database.createProduct({ 
    images:image1Paths, 
    name:'Jungle Gym Cat Tree 2.0', 
    description:[
        'Satisfy your cat’s natural instincts to scratch, perch, play, and catnap without sacrificing your home décor.',
        'The redesigned Jungle Gym Cat Tree 2.0 is an innovation in modern cat furniture, designed to accentuate and elevate your interior décor while providing your cat with a paradise of its very own.',
        'Tested by cats and their owners, our second iteration of this sleek, modern cat tree is better than ever with more scratching surfaces, lounging areas, and added platforms for easy accessibility - all with the same timeless elegance and high-quality wood construction.',
        'The Jungle Gym Cat Tree Condo 2.0 is ideal for multi-cat households, with five levels that are each designed for ultimate cat comfort and to help maintain their physical and mental health.',
        'Your cat can hide away and nap in the windowed cubby, scratch on any of the four carpeted platforms, 2 side sisal scratch pads, or two-tier sisal scratching post, snooze in the cat hammock or survey their kingdom from the top observation platform.',
        'Each perching surface is covered with removable, scratchable felt pads for easy cleaning. For cats that naturally seek height, the curved top platform promises to be a perfect lounging area – or the kitty hammock for cats that want a bit of breathability.',
        'The sturdy fabric of the hammock is designed to support the shifting positions of cats of all sizes while keeping them safe and cozy.',
        'So if you are looking for unique cat furniture with a modern twist, this affordable cat tree might be just up your alley.',
        'Because our Jungle Gym Cat Tree Condo is designed not only for your cat\'s comfort and entertainment but for yours as well.'
    ], 
    stock:99, 
    price:20 
})

const image2Paths = [];
//          note relative path vvv                 vvv this gets rid of promises
Object.values(import.meta.glob("../assets/2/*.*", { eager: true })).forEach(
  ({ default: path }) => {
    const url = new URL(path, import.meta.url);
    const data = url.pathname
    image2Paths.push(data);
  }
);

Database.createProduct({ 
    images:image2Paths, 
    name:`Cat Hair Don't Care T-Shirt`, 
    description:[
        `Each Cat Hair Don't Care T-Shirt is screen printed for crisp, clear high-quality print.`,
        `With this cute cat graphic tee, people will finally stop asking if you are part Sasquatch.`,
        `"No, it’s just cat hair. And I just don’t care!” Who needs a lint roller?`,
        `Once you accept the fact that cat hair will be on everything you own, you realize that, hey, cat hair is the new black!`,
        `This casual, comfy cat tee is designed with trendy brush lettering to emphasize that modern-day sense of “cattitude.”`,
        `If you’ve got Cat Hair and you just don’t care, wear this cute cat graphic tee and let the world know that, yeah, you have a cat or two. Or three or four.`,
        `Pair this comfy cat tee with its casual rolled sleeves and soft gray color with a pair of cutoffs or leggings - it also goes GREAT with cat hair of any color.`
    ], 
    stock:24, 
    price:18 
})