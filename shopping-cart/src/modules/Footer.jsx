import styles from './Footer.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart, CartStore } from '../helpers/cartStore'
import { useDatabase, DatabaseStore } from '../helpers/databaseStore'
import { useSyncExternalStore } from 'react'

export const Footer = ({props}) => {
    const {id, images, name, description, stock, price } = props ?? {}

    const addToCart = () => {
        const newDatabase = DatabaseStore.read(id)[0]
        newDatabase.stock--
        DatabaseStore.update(id, newDatabase)
        CartStore.create(props)
    }
    return (
        <div className={styles.container}>
            {
                stock !== 0
                ? <button className={styles.button} onClick={addToCart}>ADD TO CART</button> 
                : <button className={styles.button}>OUT OF STOCK</button>
            }
            {/* Made by Viky for The Odin Project 2023 */}
        </div>
    )
}