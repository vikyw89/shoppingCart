import { Database } from '../helpers/database'
import styles from './ProductPage.module.css'
import { Form, useLoaderData } from "react-router-dom";
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'
export function loader({ params }) {
    return Database.readProduct(params.id)
}

export const ProductPage = () => {
    const product = useLoaderData();
    console.log(product[0])
    const { images, name, variants, description } = product[0]
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.name}>
                {name}
            </div>
            <img src={images}/>
            <div className={styles.variant}>
                {}
            </div>
            <div className={styles.description}>
                {description}
            </div>
            <Footer/>
        </div>
    )
}