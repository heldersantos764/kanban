import "./app.css";
import Board from "./components/Board";
import Container from "./components/Container";
import Header from "./components/Header";
import ButtonNewCard from "./components/ButtonCard";


function App() {
  return (
    <div>
      <Header/>
      
      <Container>
      
        <Board title="A Fazer" id={1} background="#f8fafc">
        <ButtonNewCard />
        </Board>
        

        <Board title="Fazendo" id={2} background="#fbe7e5">
        <ButtonNewCard />
        </Board>

        <Board title="Feito" id={3} background="#eef8e8">
        <ButtonNewCard />
        </Board>
      </Container>
    </div>
  );
}

export default App;
