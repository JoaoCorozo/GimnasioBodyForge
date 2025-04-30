import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  // Manejar el caso en el que user sea null
  const loggedIn = user ? user.loggedIn : false;

  return (
    <nav>
      <h1>GymBodyForge</h1>
      {loggedIn ? (
        <p>Bienvenido, {user.name}</p>
      ) : (
        <p>Por favor, inicia sesión</p>
      )}
    </nav>
  );
};

export default Navbar;