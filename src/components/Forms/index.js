import "./Forms.css";
import TextInput from "../TextInput";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = ({ onEmployeeRegistered }) => {
  // Set the states of the Inputs form
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImg] = useState("");
  const [team, setTeam] = useState("");

  const teams = [
    "Programming",
    "Front-End",
    "Data Science",
    "Devops",
    "UX & Desing",
    "Mobile",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form was submmited", name, role, image, team);
    onEmployeeRegistered({ name, role, image, team });
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the fields to create the employee card.</h2>

        {/* Name field */}
        <TextInput
          required={true}
          label="Name"
          placeholder="Type your name"
          value={name}
          Changed={(value) => setName(value)}
        />

        {/* Role field */}
        <TextInput
          required={true}
          label="Role"
          placeholder="Type your role"
          value={role}
          Changed={(value) => setRole(value)}
        />

        {/* Image URL field */}
        <TextInput
          label="Image"
          placeholder="Type the URL image"
          value={image}
          Changed={(value) => setImg(value)}
        />

        {/* Team Selectfield */}
        <Dropdown
          label="Team"
          items={teams}
          value={team}
          Changed={(value) => setTeam(value)}
        />

        <Button type="submit">Create card</Button>
      </form>
    </section>
  );
};

export default Form;
