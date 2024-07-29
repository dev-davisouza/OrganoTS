import "./campo.css";

interface CampoProps {
  aoAlterado: (value: string) => void;
  placeholder?: string;
  label: string;
  valor?: string;
  obrigatorio?: boolean;
  type?: string;
  readOnly?: boolean;
}

const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
  readOnly = false,
}: CampoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Campo;
