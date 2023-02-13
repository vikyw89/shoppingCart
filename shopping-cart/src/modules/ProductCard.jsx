import styles from "./ProductCard.module.css"

export const ProductCard = ({ props }) => {
    const { id, images, name, description, variants } = props
    console.log(variants)
    const priceRange = variants.reduce((acc,cur)=>{
        switch (true) {
            case cur.price > acc.highest:
                acc.highest = cur.price
            case cur.price < acc.lowest:
                acc.lowest = cur.price
                break
            }
        return acc
    },{highest:-Infinity, lowest:Infinity})

    return (
        <div className={styles.container}>
            <img src={images} className={styles.images}/>
            <div className={styles.price}>
                {
                    priceRange.lowest !== priceRange.highest
                        ? `$ ${priceRange.lowest} - $ ${priceRange.highest}`
                        : `$ ${priceRange.lowest}`
                }
            </div>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    )
}