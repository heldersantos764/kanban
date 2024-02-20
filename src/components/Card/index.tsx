import { FC, useState } from "react";
import './style.css';

interface Props {
  id: number;
  title: string;
  description: string;
  deleteFunction: (id: number) => void;
  editFunction: (id: number, title: string, description: string) => void;
}

const Card: FC<Props> = (props) => {
  const [title, setTitle] = useState<string>(props.title);
  const [description, setDescription] = useState<string>(props.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleClickDelete = () => {
    props.deleteFunction(props.id);
  }

  const handleClickEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    props.editFunction(props.id, title, description);
    setIsEditing(false);
  }

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <button onClick={handleClickEdit}>Editar</button>
          <button onClick={handleClickDelete}>Excluir</button>
        </>
      )}
    </div>
  );
};

export default Card;