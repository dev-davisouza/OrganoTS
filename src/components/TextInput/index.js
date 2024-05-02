import './TextInput.css'

const TextInput = (props) => {
    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextInput