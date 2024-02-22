import { createContext, useContext, useState } from "react";
import { AuthContextType, AuthProviderProps } from "../Interfaces";


const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente de provedor para fornecer o contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para fazer login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Função para fazer logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};