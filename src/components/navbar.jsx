import HeaderOption from "../ui-kit/header-option"
import style from "./navbar.module.css"

const Navbar = () => {

    return (
        <nav className={`${style.navbar} glass-container`}>
            <img className={style.logo} src="logo.png" alt="logo" />
            <div className={style.menu}>
                <HeaderOption text={"Inicio"} />
                <HeaderOption text={"Sucursales"} />
                <HeaderOption text={"Contacto"} />
                <HeaderOption text={"Galería"} />
                <HeaderOption text={"Sobre nosotros"} />
            </div>
        </nav>
    )
}

export default Navbar