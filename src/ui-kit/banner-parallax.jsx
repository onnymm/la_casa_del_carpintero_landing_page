import style from './banner-parallax.module.css';
import ImageParallaxTemplate from "./image-parallax-template/image-parallax-template";

const BannerParallax = ({src, index}) => {
    return (
        <ImageParallaxTemplate index={index} src={src} className={style.banner}/>
    )
}

export default BannerParallax;