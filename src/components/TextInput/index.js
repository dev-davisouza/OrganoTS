import './TextInput.css'

const TextInput = (props) => {

    const onTyped = (event) => {
        props.Changed(event.target.value)
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onTyped} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextInput