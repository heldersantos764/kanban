import { ReactNode } from "react";

export interface CardProps {
    id: number;
    title: string;
    description: string;
    deleteFunction: (id: number) => void;
  }


 export interface BoardProps {
    children: ReactNode;
    title: string;
    id: number;
    background: string;
  }  
  