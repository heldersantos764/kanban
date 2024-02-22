import React, { FC } from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

interface Props {}

const Login: FC<Props> = (props) => {

  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="container-login">
      <form action="" onSubmit={handleLogin} className="form-login">
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
          <Link to="/register">Cadastre-se</Link>
        </div>
      </form>

      <Outlet/>

    </div>
  );
};

export default Login;
