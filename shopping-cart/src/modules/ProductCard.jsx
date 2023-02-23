import styles from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProductCard = ({ props }) => {
    const { id, images, name, description, price, stock } = props
    const navigate = useNavigate();
    
    // const priceRange = variants.reduce((acc,cur)=>{
    //     switch (true) {
    //         case cur.price > acc.highest:
    //             acc.highest = cur.price
    //         case cur.price < acc.lowest:
    //             acc.lowest = cur.price
    //             break
    //         }
    //     return acc
    // },{highest:-Infinity, lowest:Infinity})

    const clickHandler = () => {
        navigate(`/products/${id}`)
    }

    return (
        <div className={styles.container} onClick={clickHandler}>
            <img src={images[0]} className={styles.images}/>
            <div className={styles.price}>
                $ {price}
                {/* {
                    priceRange.lowest !== priceRange.highest
                        ? `$ ${priceRange.lowest} - $ ${priceRange.highest}`
                        : `$ ${priceRange.lowest}`
                } */}
            </div>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    )
}