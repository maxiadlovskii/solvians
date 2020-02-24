import React from 'react'
import { useImageLoader } from '../../../hooks'
import {Loader} from "../Loader/Loader";
import styles from './Image.module.scss'
import {skeletons} from "../../../constants";

export const Image = ({ src, width, heightRation = 100 }) => {
    const [isLoaded] = useImageLoader(src);
    return <>{isLoaded ? <img src={src} width={width}/> :
            <div style={{
        width,
        position: 'relative',
        paddingTop: `${heightRation}%`,
        backgroundImage: isLoaded ? `url(${src})` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>{
        <div className={styles.loader}><Loader type={skeletons.IMAGE}/></div>
    }</div>}
    </>
};