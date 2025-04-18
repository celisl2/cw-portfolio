import { log } from 'console';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import laura from './../public/assets/accordion/neck.jpg';
import oth from './../public/assets/accordion/lc.jpg';
import styles from '../styles/Slider.module.scss';



const Slider = () => {
    const [index, setIndex] = useState(0);
    const srcs = [{imgSource: laura, alt: "laura"}, {imgSource: oth, alt: "other"} ];
    const getPrevious = () => setIndex(index - 1 == -1 ? srcs.length - 1 : index - 1);
    const getNext = () => setIndex(index + 1 == srcs.length ? 0 : index + 1);

    useEffect(() => {
        const timeout = setTimeout(() => setIndex((prevIndex) => prevIndex === srcs.length - 1 ? 0 : prevIndex + 1), 5000);
        return () => clearTimeout(timeout)
    }, [index, srcs.length]);

    console.log(index);

    return (
        <div /*>className={styles.slider} */>
            <>
            {
                srcs.map((img, i) => {
                    if(index === i){
                        return (
                            <div className={styles.slider} key={i}>
                                <span className={styles.arrow} onClick={getPrevious}>&#10094;</span>
                                <Image
                                    className={styles.imageContainer}
                                    src={img.imgSource}
                                    alt={img.alt}
                                    //height={500} width={500}
                                />
                                <span className={styles.arrow} onClick={getNext}>&#10095;</span>
                            </div>
                        )
                    }
                })
            }
            </>
        </div>
    );
};

export default Slider;