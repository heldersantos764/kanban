import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const NotFound: FC = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page">
      <div className="message">Página 404</div>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default NotFound;
