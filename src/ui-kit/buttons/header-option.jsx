import { NavLink } from 'react-router-dom'
import style from './header-option.module.css'

const HeaderOption = ({content, link}) => {
    return (
        <NavLink to={link} className={style.navlink}>
            <button className={style.button}>
                <div>{content}</div>
            </button>
        </NavLink>
    )
}

export default HeaderOption