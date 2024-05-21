import Button from "../ui-kit/buttons/button";
import ImageParallaxTemplate from "../ui-kit/image-parallax-template/image-parallax-template";
import style from './info-card.module.css';

const InfoCard = ({src, title, description, button, className}) => {

    return (
        <div className={`${style.container} ${className}`}>
            <ImageParallaxTemplate src={src} className={style.infoCard} />
            <div className={style.description}>
                <div className={style.info}>
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                </div>
                <Button text={button} />
            </div>
        </div>
    )
}

export default InfoCard;