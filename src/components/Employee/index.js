import "./Employee.css";

export default function Employee({ image, name, role, bgColor }) {
  return (
    <div className="employee">
      <header style={{ backgroundColor: bgColor }}>
        <img src={image} alt="Employee" />
      </header>
      <footer>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </footer>
    </div>
  );
}
