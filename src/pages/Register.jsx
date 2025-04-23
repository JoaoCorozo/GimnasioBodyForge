import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-semibold mb-6">Regístrate</h2>
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            id="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition">Regístrate</button>
      </form>
      <div className="mt-4 text-sm">
        ¿Ya tienes cuenta? <Link to="/login" className="text-blue-600">Inicia sesión aquí</Link>
      </div>
    </div>
  );
};

export default Register;