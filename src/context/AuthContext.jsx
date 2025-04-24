import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Juan Pérez", loggedIn: true });

  const login = (userData) => setUser({ ...userData, loggedIn: true });
  const logout = () => setUser({ name: "", loggedIn: false });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
