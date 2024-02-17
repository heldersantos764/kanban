import "./app.css";
import Board from "./components/Board";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Board title="A Fazer" id={1} background="#f8fafc">
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
        </Board>

        <Board title="Fazendo" id={1} background="#fbe7e5">
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
        </Board>

        <Board title="Feito" id={1} background="#eef8e8">
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
          <Card
            id={1}
            title="Titulo teste"
            description="descrição de teste"
            deleteFunction={() => {}}
          />
        </Board>
      </Container>
    </div>
  );
}

export default App;
