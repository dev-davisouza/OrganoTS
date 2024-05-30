import "./TextInput.css";

const TextInput = ({ Changed, label, value, required, placeholder }) => {
  const onTyped = (event) => {
    Changed(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        value={value}
        onChange={onTyped}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
