import { FC, useState } from "react";
import './style.css'

interface Props {
  id: number;
  title: string;
  description: string;
  deleteFunction: (id: number) => void;
}

const Card: FC<Props> = (props) => {

  const [title, setTitle] = useState<string>(props.title);
  const [description, setDescription] = useState<string>(props.description);


  const handleClickDelete = () => {
    props.deleteFunction(props.id);
  }

  return (
    <div className="card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div><button>Editar</button></div>
        <div>
          <button onClick={handleClickDelete}>
            excluir
          </button>
        </div>
    </div>
  );
};

export default Card;