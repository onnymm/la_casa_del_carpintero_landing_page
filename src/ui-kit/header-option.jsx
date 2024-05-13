import style from './header-option.module.css'

const HeaderOption = ({text}) => {
    return (
        <button className={style.button}>
            <span>{text}</span>
        </button>
    )
}

export default HeaderOption