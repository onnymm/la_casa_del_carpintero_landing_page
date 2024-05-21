import { cardsInfo } from "../data/home"
import InfoCard from "./info-card"
import style from "./info-cards.module.css"

const InfoCards = () => {

    return (
        <div className={style.container}>
            {
                cardsInfo.map(
                    (card, index) => (
                        <InfoCard
                            key={index}
                            src={card.src}
                            title={card.title}
                            description={card.description}
                            button={card.button}
                            className={style.card}
                        />
                    )
                )
            }
        </div>
    )
}

export default InfoCards;