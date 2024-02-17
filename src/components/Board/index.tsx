import React, { FC, ReactNode } from "react";
import Card from "../Card";
import "./style.css"

interface Props {
  children: ReactNode;
  title: string;
  id: number;
  background: string;
}

const Board: FC<Props> = (props) => {
  return (
    <div className="board">
      <div className="title">{props.title}</div>
      <div className="cards" style={{backgroundColor: props.background}}>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child) && child.type === Card) {
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
