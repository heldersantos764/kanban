import { FC, FormEvent, useEffect, useState } from "react";
import "./style.css";
import { Outlet, useNavigate } from "react-router-dom";
import { login } from "../../api/requests";

interface Props {}

const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");
  const navidate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(email, password);

    if (response) {
      window.localStorage.setItem("@auth", "isAuth");
      window.localStorage.setItem("username", response.name);
      setIsLogged(true);
    } else {
      setMsgError("Usuário ou senha incorreta.");
    }
  };

  useEffect(() => {
    if (isLogged) {
      navidate("/home");
    }
  }, [isLogged]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMsgError("");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [msgError]);

  return (
    <div className="container-login">
      <form
        action=""
        onSubmit={handleLogin}
        method="post"
        className="form-login"
      >
        <h1>Login</h1>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary full-width">
            Entrar
          </button>
        </div>

        {msgError && (
          <div className="fs-1 fw-bold bg-danger btn-danger text-center py-1">
            {msgError}
          </div>
        )}
        
      </form>

      <Outlet />
    </div>
  );
};

export default Login;
