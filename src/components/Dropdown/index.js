import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.Changed(event.target.value)}
        value={props.value}
      >
        <option value=""></option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
