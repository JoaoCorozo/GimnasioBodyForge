import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center">
      <header className="text-center p-8 bg-orange-600 text-white w-full">
        <h1 className="text-5xl font-bold">Gimnasio BodyForge</h1>
        <p className="mt-4 text-lg">¡Bienvenido a tu lugar para entrenar y mejorar tu salud!</p>
      </header>

      <main className="flex flex-col items-center mt-12">
        <div className="max-w-lg text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Transforma tu cuerpo, mejora tu vida</h2>
          <p className="mt-4 text-lg text-gray-600">Únete a nuestra comunidad de fitness. Reserva tus horarios de entrenamiento y empieza a alcanzar tus metas.</p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Registrarse
          </Link>
        </div>
      </main>

      <footer className="mt-12 p-4 text-center text-gray-500">
        <p>© 2025 Gimnasio BodyForge. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;