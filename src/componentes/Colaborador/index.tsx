import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import "./colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
  colaborador: IColaborador;
  corDeFundo: string;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Colaborador = ({
  colaborador,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}: ColaboradorProps) => {
  function favoritar() {
    if (colaborador.id) aoFavoritar(colaborador.id);
  }
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => colaborador.id && aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <h5>
          <i>{colaborador.data}</i>
        </h5>

        <div className="favorito">
          {colaborador.favorito ? (
            <AiFillHeart color="#ff0000" size={25} onClick={favoritar} />
          ) : (
            <AiOutlineHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
