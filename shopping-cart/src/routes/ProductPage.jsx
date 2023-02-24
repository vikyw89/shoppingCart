import { Database } from '../helpers/database'
import styles from './ProductPage.module.css'
import { Form, NavLink, useLoaderData } from "react-router-dom";
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'
import { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
// Import Swiper styles
import 'swiper/css/bundle';
import { useDatabase } from '../helpers/databaseStore';

register()

export function loader({ params }) {
    return params.id
}

export const ProductPage = (props) => {
    const productID = useLoaderData();
    const database = useDatabase()
    const [product] = database.filter(el=>{
        return el.id == productID
    })
    const { images, name, stock, price, description } = product
    const swiperElRef = useRef(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
      });
  
      swiperElRef.current.addEventListener('slidechange', (e) => {
      });
    }, []);

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.navigation}>
            <NavLink to="/" end>
                {({ isActive }) => (
                <span
                    className={
                    isActive ? styles.activeNav : styles.nav
                    }
                >
                    Home
                </span>
                )}
            </NavLink>
            /
            <NavLink to="/" end>
                {({ isActive }) => (
                <span
                    className={
                    isActive ? styles.activeNav : styles.nav
                    }
                >
                    Collection
                </span>
                )}
            </NavLink>
            /
            </div>
            <div className={styles.name}>
                {name}
            </div>
            <main className={styles.imagesContainer}>
                <swiper-container class="gallery-top"
                    ref={swiperElRef}
                    slides-per-view="1"
                    // pagination="true"
                    spaceBetween="10"
                    thumbs-swiper=".gallery-thumbs"
                    navigation-nextEl=".swiper-button-next"
                    navigation-prevEl=".swiper-button-prev"
                    >
                    {images.map((el,index)=>{
                        return (
                            <swiper-slide key={index}>
                                <img className={styles.image} src={el}/>
                            </swiper-slide>
                        )
                    })}
                </swiper-container>
                {
                    images.length !== 1 &&
                <swiper-container class="gallery-thumbs"
                    space-between="10"
                    slides-per-view="4"
                    free-mode="true"
                    watch-slides-visibility="true"
                    watch-slides-rogress="true"
                    >
                    {images.map((el,index)=>{
                        return (
                            <swiper-slide key={index}>
                                <img className={styles.thumb} src={el}/>
                            </swiper-slide>
                        )
                    })}
                </swiper-container>
                }
            </main>
            <div className={styles.priceContainer}>
                <div className={styles.priceTitle}>
                    Price
                </div>
                <div className={styles.price}>
                    $ {price}
                </div>
            </div>
            <div className={styles.stock}>
                only <span>{stock}</span> left !
            </div>
            <div className={styles.description}>
                <div className={styles.title}>
                    Description
                </div>
                {description.map((el,index)=>{
                    return (
                        <div key={index} className={styles.sentence}>{el}</div>
                    )
                })}
            </div>
            <Footer props={product}/>
        </div>
    )
}