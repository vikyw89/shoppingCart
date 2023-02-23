import { Database } from '../helpers/database'
import styles from './ProductPage.module.css'
import { Form, useLoaderData } from "react-router-dom";
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'
import { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
// Import Swiper styles
import 'swiper/css/bundle';

register()

export function loader({ params }) {
    return Database.readProduct(params.id)[0]
}

export const ProductPage = (props) => {
    const product = useLoaderData();
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
            </main>
            <div className={styles.price}>
                ${price}
            </div>
            <div className={styles.stock}>
                {stock} in stock
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