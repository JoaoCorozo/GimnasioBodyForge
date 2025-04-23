import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-600 p-4 w-full text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BodyForge</h1>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Inicio</Link>
          <Link to="/login" className="hover:text-gray-300">Iniciar sesión</Link>
          <Link to="/register" className="hover:text-gray-300">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;