import { FC } from "react";
import "./style.css";

interface Props {}

const Register: FC<Props> = (props) => {
  return (
    <div className="container-register">
      <form action="">
        <h1>Login</h1>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            autoFocus
            placeholder="Digite se e-mail"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Digite sua senha"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </div>

        <div>
          <a href="#" className="link">Cadastre-se</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
