import { FC } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>Página 404</div>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default NotFound;
