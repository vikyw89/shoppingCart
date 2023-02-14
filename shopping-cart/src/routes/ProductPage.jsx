import { Database } from '../helpers/database'
import styles from './ProductPage.module.css'
import { Form, useLoaderData } from "react-router-dom";
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs'

export function loader({ params }) {
    return Database.readProduct(params.id)
}

export const ProductPage = (props) => {
    const product = useLoaderData();
    const { images, name, variants, description } = product[0]
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.name}>
                {name}
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                {images.map((item,index)=>{
                    return (
                        <SwiperSlide>
                            <img key={index} src={item} className={styles.image}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                >
            </Swiper>
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