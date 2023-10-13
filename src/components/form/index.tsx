import { useState } from "react";
import TextField from "./text_field";
import SuspensedList from "./suspensed_list";
import Button from "./button";
import { IUser } from "../../shared/interfaces/iuser";
import { ITeam } from "../../shared/interfaces/iteam";
import "./form.css";

interface FormProps {
  updateUsers: (newUser: IUser) => void;
  teams: ITeam[];
}

const Form = ({ updateUsers, teams }: FormProps) => {
  const emptyForm: IUser = {
    Nome: "",
    Cargo: "",
    Imagem: "",
    Time: "Programação",
  };

  const [value, setValue] = useState(emptyForm);
  const changeValue = (newValue: string[]) =>
    setValue({ ...value, [newValue[0]]: newValue[1] });

  const onSaving = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUsers(value);
    setValue(emptyForm);
  };

  return (
    <section className="form">
      <form onSubmit={onSaving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          changeValue={changeValue}
          required={true}
          value={value.Nome}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <TextField
          changeValue={changeValue}
          required={true}
          label="Cargo"
          value={value.Cargo}
          placeholder="Digite o seu cargo"
        />
        <TextField
          changeValue={changeValue}
          label="Imagem"
          value={value.Imagem}
          placeholder="Digite o endereço da imagem"
        />
        <SuspensedList
          changeValue={changeValue}
          label="Time"
          value={value.Time}
          teamsNames={teams.map((team) => team.name)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
