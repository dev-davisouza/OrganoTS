import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Forms";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: "Programming",
      primaryColor: "#57c278",
      secondColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82cffa",
      secondColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secondColor: "#f0f8e2",
    },
    {
      name: "Devops",
      primaryColor: "#e06b69",
      secondColor: "#fde7e8",
    },
    {
      name: "UX & Desing",
      primaryColor: "#db6ebf",
      secondColor: "#fae9f5",
    },
    {
      name: "Mobile",
      primaryColor: "#ffba05",
      secondColor: "#fff5d9",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const onNewEmployeeAdded = (employee) => {
    setEmployees([...employees, employee]);
    console.log(employees);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>

      <Form
        onEmployeeRegistered={(employee) => onNewEmployeeAdded(employee)}
        dropItems={teams.map((team) => team.name)}
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          teamName={team.name}
          primaryColor={team.primaryColor}
          secondColor={team.secondColor}
          employees={employees.filter(
            (employee) => employee.team === team.name,
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
