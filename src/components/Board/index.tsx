import React, { FC } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BoardProps } from "../../Interfaces";

import "./style.css";

const Board: FC<BoardProps> = (props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const cardId = parseInt(e.dataTransfer.getData("cardId"));
    props.onCardMove(
      cardId,
      parseInt(e.dataTransfer.getData("sourceBoardId")),
      props.id
    );
  };

  /**
   * que é acionado enquanto um elemento é arrastado sobre o elemento de destino.
   * @param e
   */
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="board" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="title">{props.title}</div>
      <div className="cards" style={{ backgroundColor: props.background }}>
        <div>
          <button
            type="button"
            className="btn btn-primary full-width"
            onClick={() => {
              props.onCardAdd(props.id);
            }}
          >
            <BiAddToQueue fontSize="1.3em" color="#ffffff" />
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Board;
