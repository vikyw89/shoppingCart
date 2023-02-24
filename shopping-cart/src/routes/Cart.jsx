
import { useCart } from "../helpers/cartStore"
import { CartItem } from "../modules/CartItem"
import { Header } from "../modules/Header"
import styles from "./Cart.module.css"

export const Cart = () => {
    const cart = useCart()
    console.log(cart)
    return (
        <div className={styles.container}>
            <Header/>
            {cart.map((el,index)=>{
                return <CartItem key={index} props={el}/>
            })}
        </div>
    )
}