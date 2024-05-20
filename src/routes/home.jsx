import BannerParallax from "../ui-kit/banner-parallax";
import BrandRibbon from "../ui-kit/brands/brands-ribbon";
import Button from "../ui-kit/buttons/button";
import style from "./home.module.css";

const Home = () => {
    return (
        <div style={{overflowX: "hidden",overflowY: "auto"}}>
            <main>
                <section className={style.main}>
                    <h1>Tu experto en carpintería.</h1>
                    <h2>Explora nuestras sucursales y encuentra la más cercana a ti.</h2>
                    <Button text={"Ubícanos"} />
                </section>
                <BannerParallax src={"banner.jpg"} index={10}/>
                <BrandRibbon />
            </main>
        </div>
    )
}

export default Home;