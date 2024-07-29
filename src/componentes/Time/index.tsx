import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./time.css";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import { ITime } from "../../compartilhado/interfaces/ITimes";

interface TimeProps {
  time: ITime;
  colaboradores: IColaborador[];
  aoDeletar: (id: string) => void;
  mudarCor: (cor: string, id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Time = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}: TimeProps) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(evento) => {
            if (time.id) {
              mudarCor(evento.target.value, time.id);
            }
          }}
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
