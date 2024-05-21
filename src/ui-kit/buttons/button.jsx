import style from './button.module.css';

const Button = ({text}) => {
    
    return (
        <button className={style.button}>
            <div>{text}</div>
        </button>
    )
}

export default Button;