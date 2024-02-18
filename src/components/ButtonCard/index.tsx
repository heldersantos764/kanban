import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"
import Card from '../Card'; // Make sure to import the Card component

interface CardProps {
  id: number;
  title: string;
  description: string;
  deleteFunction: (id: number) => void;
}

function ButtonNewCard() {
  const [cards, setCards] = useState<CardProps[]>([]);

  const handleAddCard = () => {
    const newCard: CardProps = {
      id: cards.length + 1,
      title: 'Vindo do button',
      description: 'descrição de teste',
      deleteFunction: deleteCard,
    };

    setCards([...cards, newCard]);
  };

  const deleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <>
      <button type="button" onClick={handleAddCard}>
      <FaPlusCircle />
      </button>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            deleteFunction={card.deleteFunction}
          />
        ))}
      </div>
    </>
  );
}

export default ButtonNewCard;