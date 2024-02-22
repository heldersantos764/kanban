import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const isLogged = () => {
  return !!window.localStorage.getItem("@auth");
};

const ProtectedAdminRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  return isLogged() ? <>{element}</> : <Navigate to="/login" />;
};

const LoginRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  return isLogged() ? <Navigate to="/home" /> : <>{element}</>;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRoute element={<Login />} />} />
        <Route path="/login" element={<LoginRoute element={<Login />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedAdminRoute element={<Admin />} />} />
        <Route path="*" element={<NotFound />} /> {/* Rota para erro 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
