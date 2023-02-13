import styles from './Header.module.css'
import logoURL from '../assets/logo.png'
import { useCart } from '../helpers/cartStore'

export const Header = () => {
    const cart = useCart()
    return (
        <div className={styles.container}>
            <img src={logoURL} className={styles.logo}/>
            <div className={styles.search}>
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
            <div className={styles.bag}>
                <span className="material-symbols-outlined" id={styles.icon}>
                    local_mall
                </span>
                <span className={styles.badge}>
                    <span>
                        {cart.length}
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