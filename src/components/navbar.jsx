import { NavLink } from "react-router-dom"
import HeaderOption from "../ui-kit/buttons/header-option"
import IconNightMode from "../ui-kit/icons/icon-night-mode"
import IconPhone from "../ui-kit/icons/icon-phone"
import style from "./navbar.module.css"

const Navbar = () => {

    return (
        <nav className={`${style.navbar} glass-container`}>
            <NavLink>
                <img className={style.logo} src="logo.png" alt="logo" />
            </NavLink>
            <div className={style.menu}>
                <HeaderOption content={"Inicio"} link={"/"} />
                <HeaderOption content={"Sucursales"} link={"/sucursales"} />
                <HeaderOption content={"Contacto"} />
                <HeaderOption content={"Galería"} />
                <HeaderOption content={"Sobre nosotros"} />
            </div>
            <div className={style.menu}>
                <HeaderOption content={<IconPhone />} />
                <HeaderOption content={<IconNightMode />} />
            </div>
        </nav>
    )
}

export default Navbar