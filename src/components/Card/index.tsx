import React, { FC, useState } from "react";
import { CardProps } from "../../Interfaces";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import "./style.css";

const Card: FC<CardProps> = (props) => {
  const [title, setTitle] = useState<string>(props.title);
  const [description, setDescription] = useState<string>(props.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleClickDelete = () => {
    if(confirm(`Deseja realmente excluir o Card de título ${title}?`)){
      props.onDelete(props.boardId, props.id);
    }
  };

  const handleClickEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log(title, description)
    props.onEdit(props.boardId, props.id, title, description);
    setIsEditing(false);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("cardId", props.id.toString());
    e.dataTransfer.setData("sourceBoardId", props.boardId.toString());
  };

  return (
    <div className="card" draggable onDragStart={handleDragStart}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control mb-1"
            placeholder="Título"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control mb-1 full-width"
            placeholder="Descrição"
          />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <div className="title">{title ? title : "Título"}</div>
          <div className="description">{description ? description : "Descrição"}</div>
          <button onClick={handleClickEdit}>
            <FiEdit />
          </button>
          <button onClick={handleClickDelete}>
            <MdOutlineDelete />
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
