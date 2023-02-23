import styles from './Footer.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { CartStore, useCart } from '../helpers/cartStore'
import { ShoppingCart } from '../helpers/shoppingCart'


export const Footer = ({props}) => {
    const cart = useCart()
    const addToCart = () => {
        console.log(CartStore.method.create())
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={addToCart}>ADD TO CART</button>
            {/* Made by Viky for The Odin Project 2023 */}
        </div>
    )
}