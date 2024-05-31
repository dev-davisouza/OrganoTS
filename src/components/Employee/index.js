import "./Employee.css";

export default function Employee({ image, name, role }) {
  return (
    <div className="employee">
      <header>
        <img src={image} alt="Employee" />
      </header>
      <footer>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </footer>
    </div>
  );
}
