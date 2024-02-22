import { FC } from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";

interface Props {}

const Register: FC<Props> = (props) => {
  return (
    <div className="container-register">
      <form action="">
        <h1>Cadastre-se</h1>

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
          <label htmlFor="password-verify">Repetir Senha</label>
          <input
            type="password"
            name="password-verify"
            id="password-verify"
            className="form-control"
            placeholder="Repita sua senha"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Cadastrar-se
          </button>
        </div>

        <div>
          <Link to='/'>Voltar para login</Link>
        </div>
      </form>

      <Outlet/>
    </div>
  );
};

export default Register;
