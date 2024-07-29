import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import { ITime } from "../../compartilhado/interfaces/ITimes";

interface FormularioProps {
  aoCadastrar: (colaborador: IColaborador) => void;
  times: string[];
  aoCriarTime: (time: ITime) => void;
}

const Formulario = ({ aoCadastrar, times, aoCriarTime }: FormularioProps) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setDate] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
      data,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Campo
          label="Data de entrada"
          aoAlterado={() => setDate(currentDate)}
          valor={currentDate}
          readOnly
          type="date"
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          aoCriarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cor"
          type="color"
          placeholder="Digite sua cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
