import styles from './Header.module.css'
import logoURL from '../assets/logo.png'

export const Header = () => {
    return (
        <div className={styles.container}>
            <img src={logoURL} className={styles.logo}/>
            <div className={styles.search}>
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
            <div className={styles.bag}>
                <span className="material-symbols-outlined">
                    local_mall
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