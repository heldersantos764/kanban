import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import { AuthProvider } from "../providers/AuthProvider";

interface User {
  isLoggedIn: boolean;
}

const isAuthenticated = (user: User | null): boolean => {
  return user?.isLoggedIn || false;
};

const ProtectedAdminRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  const user: User | null = null; // Aqui você deve obter o usuário do estado ou do contexto global
  return isAuthenticated(user) ? <>{element}</> : <Navigate to="/login" />;
};

const LoginRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const user: User | null = null; //Aqui você deve obter o usuário do estado ou do contexto global
  return isAuthenticated(user) ? <Navigate to="/home" /> : <>{element}</>;
};

const Router: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRoute element={<Login />} />} />
          <Route path="/login" element={<LoginRoute element={<Login />} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={<ProtectedAdminRoute element={<Admin />} />}
          />
          <Route path="*" element={<NotFound />} /> {/* Rota para erro 404 */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
