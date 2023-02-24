
import { useNavigate } from "react-router-dom"
import { useCart } from "../helpers/cartStore"
import { CartItem } from "../modules/CartItem"
import { Header } from "../modules/Header"
import styles from "./Cart.module.css"

export const Cart = () => {
    const cart = useCart()
    const navigate = useNavigate()
    const subTotal = cart.reduce((acc,cur)=>{
        return acc + (+cur.quantity * +cur.price)
    },0)
    const checkoutClickHandler = () => {
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <Header/>
            {cart.map((el,index)=>{
                return <CartItem key={index} props={el}/>
            })}
            <div className={styles.subtotal}>
                <span>
                    Subtotal
                </span>
                <span>
                    $ {subTotal}
                </span>
            </div>
            <button className={styles.button} onClick={checkoutClickHandler}>CHECKOUT</button> 
        </div>
    )
}