import style from './button.module.css';

const Button = ({text}) => {
    
    return (
        <button className={style.button}>
            {text}
        </button>
    )
}

export default Button;