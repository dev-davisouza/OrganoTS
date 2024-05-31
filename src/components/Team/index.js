import Employee from "../Employee";
import "./Team.css";

const Team = ({ teamName, primaryColor, secondColor, employees }) => {
  return employees.length > 0 ? (
    <section className="team" style={{ backgroundColor: secondColor }}>
      <h3 style={{ borderColor: primaryColor }}>{teamName}</h3>
      <div className="employees">
        {employees.map((employee) => (
          <Employee
            key={employee.name}
            name={employee.name}
            image={employee.image}
            role={employee.role}
            bgColor={primaryColor}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
