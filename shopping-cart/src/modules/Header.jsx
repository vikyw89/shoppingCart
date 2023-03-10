import styles from './Header.module.css'
import logoURL from '../assets/logo.png'
import { useCart } from '../helpers/cartStore'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const cart = useCart()
    const totalQuantity = cart.reduce((acc,cur)=>{
        return acc + cur.quantity
    },0)
    const navigate = useNavigate()
    
    const cartClickHandler = () => {
        navigate('/cart')
    }

    const logoClickHandler = () => {
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <img src={logoURL} className={styles.logo} onClick={logoClickHandler}/>
            <div className={styles.search}>
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
            <div className={styles.bag}>
                <span className="material-symbols-outlined" id={styles.icon}>
                    local_mall
                </span>
                <span className={styles.badge} onClick={cartClickHandler}>
                    <span>
                        {totalQuantity}
                    </span>
                </span>
            </div>
            <div className={styles.menu}>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
    )
}