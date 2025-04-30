import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Simula un usuario autenticado como estado inicial
  const [user, setUser] = useState({
    name: "Juan Pérez",
    email: "juan.perez@example.com",
  });

  const login = (userData) => {
    setUser(userData); // Actualiza el estado del usuario
  };

  const logout = () => {
    setUser(null); // Limpia el estado del usuario
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
