import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const imagenes = [
  "/src/assets/gym1.jpg",
  "/src/assets/gym2.jpg",
  "/src/assets/gym3.jpg"
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const cambiarImagen = (dir) => {
    setIndex((prev) => {
      if (dir === 'next') return (prev + 1) % imagenes.length;
      if (dir === 'prev') return (prev - 1 + imagenes.length) % imagenes.length;
    });
  };

  useEffect(() => {
    const intervalo = setInterval(() => cambiarImagen('next'), 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col justify-center items-center">
      <header className="text-center p-8 bg-orange-600 text-white w-full">
        <h1 className="text-5xl font-bold">Gimnasio BodyForge</h1>
        <p className="mt-4 text-lg">¡Bienvenido a tu lugar para entrenar y mejorar tu salud!</p>
      </header>

      <div className="relative w-full max-w-3xl h-72 mt-8 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={imagenes[index]}
          alt="Imagen del gimnasio"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <button
          onClick={() => cambiarImagen('prev')}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-90"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={() => cambiarImagen('next')}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-90"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <main className="flex flex-col items-center mt-12 px-4">
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
