import Navbar from "../components/navbar";
import BannerParallax from "../ui-kit/banner-parallax";
import Button from "../ui-kit/button";
import style from "./home.module.css";

const Home = () => {
    return (
        <div style={{overflowX: "hidden",overflowY: "auto"}}>
            <Navbar />
            <main>
                <section className={style.main}>
                    <h1>Tu experto en carpintería.</h1>
                    <h2>Explora nuestras sucursales y encuentra la más cercana a ti.</h2>
                    <Button text={"Ubícanos"} />
                </section>
                <BannerParallax src={"banner.jpg"} index={10}/>
                <section className={style.main}>
                    <h1>Tu experto en carpintería.</h1>
                </section>
                <br />
                {/* <BannerParallax src={"banner.jpg"} index={11}/> */}
                <section className={style.main}>
                    <h1>Tu experto en carpintería.</h1>
                    <h2>Explora nuestras sucursales y encuentra la más cercana a ti.</h2>
                    <Button text={"Ubícanos"} />
                </section>
                <section className={style.main}>
                    <h1>Tu experto en carpintería.</h1>
                    <h2>Explora nuestras sucursales y encuentra la más cercana a ti.</h2>
                    <Button text={"Ubícanos"} />
                </section>
                {/* <BannerParallax src={"banner.jpg"} index={12}/> */}
            </main>
        </div>
    )
}

export default Home;