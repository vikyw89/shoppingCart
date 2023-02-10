import styles from './Footer.module.css'
import { Navigate, useNavigate } from 'react-router-dom'


export const Footer = () => {
    const navigate = useNavigate()
    const addToCart = () => {
        console.log('clicked')
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={addToCart}>ADD TO CART</button>
            {/* Made by Viky for The Odin Project 2023 */}
        </div>
    )
}