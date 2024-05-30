import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Forms";

function App() {
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
      <Form onEmployeeRegistered={(employee) => onNewEmployeeAdded(employee)} />
    </div>
  );
}

export default App;
