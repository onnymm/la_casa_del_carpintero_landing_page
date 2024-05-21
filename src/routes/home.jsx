import InfoCards from "../components/info-cards";
import LogoMain from "../components/logo-main";
import BannerParallax from "../ui-kit/banner-parallax";
import BrandRibbon from "../ui-kit/brands/brands-ribbon";
import Button from "../ui-kit/buttons/button";
import style from "./home.module.css";

const Home = () => {
    return (
        <main>
            <section className={style.main}>
                <h1>Tu experto en carpintería.</h1>
                <h2>Explora nuestras sucursales y encuentra la más cercana a ti.</h2>
                <Button text={"Ubícanos"} />
            </section>
            <BannerParallax src={"banner.jpg"} index={10}/>
            <BrandRibbon />
            <InfoCards />
            <section className={style.main}>
                <LogoMain />
                <h1>Somos tu mejor opción en ferretería y carpintería.</h1>
                <Button text={"Cotiza con nosotros"} />
            </section>
        </main>
    )
}

export default Home;