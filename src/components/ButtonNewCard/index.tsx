import { BiAddToQueue } from "react-icons/bi";
import "./style.css";
import { FC } from "react";
import { ButtonNewCardProps } from "../../Interfaces";

const ButtonNewCard: FC<ButtonNewCardProps> = ({handleAddCard}) => {

  const handleClick = () => {
    handleAddCard()
  }

  return (
    <div className="container-button">
      <button type="button" className="btn btn-primary full-width" onClick={handleClick}>
        <BiAddToQueue fontSize="1.3em" color="#ffffff" />
      </button>
    </div>
  );
}

export default ButtonNewCard;
