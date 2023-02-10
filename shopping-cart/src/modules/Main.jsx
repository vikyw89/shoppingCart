import styles from './Main.module.css'
import landingPageImage from '../assets/Valentines_Day_Sale_Slider_300x.png'
import collectionImage from '../assets/mega-perch-hero_300x.jpg'
import { useState } from 'react'

export const Main = () => {
    const [activeBanner, setActiveBanner] = useState()
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src={landingPageImage}/>
            </div>
            <div className={styles.collection}>
                Collections
                <img src={collectionImage}/>
            </div>
        </div>
    )
}