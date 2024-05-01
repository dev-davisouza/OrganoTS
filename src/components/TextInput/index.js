import './TextInput.css'

const TextInput = () => {
    return (
        <div className="text-input">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Type your name'/>
        </div>
    )
}

export default TextInput