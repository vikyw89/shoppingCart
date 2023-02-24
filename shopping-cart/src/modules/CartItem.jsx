import { CartStore } from '../helpers/cartStore'
import { Cart } from '../routes/Cart'
import styles from './CartItem.module.css'

export const CartItem = ({ props }) => {
    const {image, name, id, quantity, price } = props
    const subTotal = quantity * price
    console.log(props)
    const plusClickHandler = ()=>{
        console.log(CartStore.read(id)[0])
        const updatedItem = CartStore.read(id)[0]
        updatedItem.quantity++
        CartStore.update(id, updatedItem)
    }
    const minusClickHandler = () => {
        const updatedItem = CartStore.read(id)[0]
        updatedItem.quantity--
        if (updatedItem.quantity === 0) {
            CartStore.delete(id)
        } else {
            CartStore.update(id, updatedItem)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image}/>
            </div>
            <div className={styles.description}>
                <div className={styles.itemName}>
                    {name}
                </div>
                <div className={styles.quantityContainer}>
                    <span className="material-symbols-outlined" onClick={minusClickHandler}>
                        remove
                    </span>
                    <span className={styles.currentQuantity}>
                        {quantity}
                    </span>
                    <span className="material-symbols-outlined" onClick={plusClickHandler}>
                        add
                    </span>
                </div>
            </div>
            <div className={styles.subTotal}>
                $ {subTotal}
            </div>
        </div>
    )
}