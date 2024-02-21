import { ReactNode } from "react";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  boardId: number;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, description: string) => void;
}

export interface BoardProps {
  title: string;
  id: number;
  background: string;
  onCardMove: (cardId: number, sourceBoardId: number, destinationBoardId: number) => void;
  onCardAdd: (boardId: number) => void;
  children: ReactNode;
}

export interface ButtonNewCardProps {
  handleAddCard: () => void;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
}

export interface BoardData {
  id: number;
  title: string;
  background: string;
  cards: CardData[];
}
