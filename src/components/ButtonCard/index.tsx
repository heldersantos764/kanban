import { useState } from 'react';
import { BiAddToQueue } from "react-icons/bi";
import Card from '../Card'; 
import './style.css';
import { CardProps } from '../../Interfaces';
const style = { color: "--color-white", fontSize: "1.3em", backgroundColor: "white"}



function ButtonNewCard() {
  const [cards, setCards] = useState<CardProps[]>([]);

  const handleAddCard = () => {
    const newCard: CardProps = {
      id: cards.length + 1,
      title: 'Título',
      description: 'Descreva a tarefa',
      deleteFunction: deleteCard,
      editFunction: ()=>{},
    };

    setCards([...cards, newCard]);
  };

  const deleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <>
      <button type="button" className="addButton" onClick={handleAddCard}>
      <BiAddToQueue style={style}/>
      </button>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            deleteFunction={card.deleteFunction}
            editFunction={()=>{}}
          />
        ))}
      </div>
    </>
  );
}

export default ButtonNewCard;