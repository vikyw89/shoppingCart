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
    return Database.readProduct(params.id)
}

export const ProductPage = (props) => {
    const product = useLoaderData();
    const { images, name, variants, description } = product[0]
    const swiperElRef = useRef(null);
    const displayVariants = variants.length > 1
    console.log(displayVariants)

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('slidechange', (e) => {
        console.log('slide changed', e);
      });
    }, []);
    console.log(variants)
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

            <div className={styles.variants}>
                {
                    displayVariants &&
                    variants.map((el,index)=>{
                        return (
                            <div className={styles.ddd}></div>
                        )
                    })
                } 
            </div>
            <div className={styles.description}>
                {description.map((el,index)=>{
                    return (
                        <div key={index} className={styles.sentence}>{el}</div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}