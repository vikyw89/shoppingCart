import styles from './Main.module.css'
import landingPageImage from '../assets/Valentines_Day_Sale_Slider_300x.png'
import { useState } from 'react'
import { useDatabase } from '../helpers/databaseStore'
import { ProductCard } from './ProductCard'

export const Main = () => {
    const [activeBanner, setActiveBanner] = useState()
    const database = useDatabase()
    console.log(database)
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src={landingPageImage}/>
            </div>
            <div className={styles.cards}>
                {database.map(item=>{
                    return <ProductCard key={item.id} props={item}/>
                })}
            </div>
        </div>
    )
}