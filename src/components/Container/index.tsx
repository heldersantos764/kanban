import React, { FC, ReactNode } from "react";
import Board from "../Board";
import "./style.css";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = (props) => {
  return (
    <div className="container-cards">
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child) && child.type === Board) {
          return child;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Container;
