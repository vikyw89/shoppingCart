import { useCart } from "../helpers/cartStore"
import { Header } from "../modules/Header"
import styles from "./Cart.module.css"

export const Cart = () => {
    const cart = useCart()
    console.log(cart)
    return (
        <div className={styles.container}>
            <Header/>
            <div>
                cart
            </div>
        </div>
    )
}