import styles from './Footer.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { CartStore } from '../helpers/cartStore'
import { useSyncExternalStore } from 'react'

export const Footer = ({props}) => {
    const cart = useSyncExternalStore(CartStore.subscribe, CartStore.getSnapshot)
    console.log(cart)
    const addToCart = () => {
        CartStore.create(props)
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={addToCart}>ADD TO CART</button>
            {/* Made by Viky for The Odin Project 2023 */}
        </div>
    )
}