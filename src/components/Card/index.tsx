import React, { FC } from "react";
import { CardProps } from "../../Interfaces";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import "./style.css";

const Card: FC<CardProps> = (props) => {
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("cardId", props.id.toString());
    e.dataTransfer.setData("sourceBoardId", props.boardId.toString());
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <button onClick={() => props.onEdit(props.id, props.title, props.description)}>
        <FiEdit />
      </button>
      <button onClick={() => props.onDelete(props.id)}>
        <MdOutlineDelete />
      </button>
    </div>
  );
};

export default Card;