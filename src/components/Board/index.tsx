import React, { FC } from "react";
import ButtonNewCard from "../ButtonCard";
import Card from "../Card";
import "./style.css"
import { BoardProps } from "../../Interfaces";


const Board: FC<BoardProps> = (props) => {
  return (
    <div className="board">
      <div className="title">{props.title}</div>
      <div className="cards" style={{ backgroundColor: props.background }}>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child) && child.type === Card || ButtonNewCard()) {
            return child;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Board;
