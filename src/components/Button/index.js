import './Button.css'

const Button = (props) => {
    return (
        <div className="button">
            <button type={props.type}>{props.children}</button>
        </div>
    )
}

export default Button