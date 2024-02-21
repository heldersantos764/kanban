import { FC, useEffect, useState } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Board from "../../components/Board";
import Card from "../../components/Card";
import { BoardData } from "../../Interfaces";

const Admin: FC = () => {
  const [boards, setBoards] = useState<BoardData[]>([
    { id: 1, title: "A Fazer", background: "#f8fafc", cards: [] },
    { id: 2, title: "Fazendo", background: "#fbe7e5", cards: [] },
    { id: 3, title: "Feito", background: "#eef8e8", cards: [] },
  ]);

  const handleCardMove = (
    cardId: number,
    sourceBoardId: number,
    destinationBoardId: number
  ) => {
    const updatedBoards = boards.map((board) => {
      if (board.id === sourceBoardId) {
        // Remove o card do board de origem
        const updatedCards = board.cards.filter((card) => card.id !== cardId);
        return { ...board, cards: updatedCards };
      }
      if (board.id === destinationBoardId) {
        // Adiciona o card no board de destino
        const cardToMove = boards
          .find((board) => board.id === sourceBoardId)
          ?.cards.find((card) => card.id === cardId);

        if (cardToMove) {
          cardToMove.id = board.cards.length + 1;
          const updatedCards = [...board.cards, cardToMove];
          return { ...board, cards: updatedCards };
        }
      }
      return board;
    });
    setBoards(updatedBoards);
  };

  /**
   * Função acionada no click do botão adicionar novo card
   * @param boardId
   */
  const handleCardAdd = (boardId: number) => {
    setBoards((prevBoards: BoardData[]) => {
      return prevBoards.map((board) => {
        if (board.id === boardId) {
          const newCard = {
            id: board.cards.length + 1,
            title: "Título",
            description: "Descrição",
          };

          return {
            ...board,
            cards: [...board.cards, newCard],
          };
        }
        return board;
      });
    });
  };

  /**
   * sempre que ocorrer uma alteração na lista de cards
   * os dados devem ser salvos na base de dados
   */
  useEffect(() => {
    console.log(boards);
  }, boards);

  return (
    <div>
      <Header />

      <Container>
        {boards.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            id={board.id}
            background={board.background}
            onCardMove={handleCardMove}
            onCardAdd={handleCardAdd}
          >
            {board.cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                boardId={board.id}
                title={card.title}
                description={card.description}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            ))}
          </Board>
        ))}
      </Container>
    </div>
  );
};

export default Admin;
