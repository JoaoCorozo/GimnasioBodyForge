import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from "../assets/logo.png";

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
    <div className="min-h-screen bg-gradient-to-b from-orange-600 via-orange-400 to-orange-200 text-gray-900 flex flex-col justify-center items-center font-sans">
      <header className="text-center p-8 w-full" data-aos="fade-down">
        <Link to="/" className="flex justify-center items-center">
          <img src={logo} alt="BodyForge Logo" className="h-60 drop-shadow-xl" />
        </Link>
        <h2 className="text-3xl font-bold text-gray-900">¡Bienvenido a tu lugar para entrenar y mejorar tu salud!</h2>
      </header>

      <div
        className="relative w-full max-w-3xl h-72 mt-8 overflow-hidden rounded-2xl shadow-2xl"
        data-aos="zoom-in"
      >
        <img
          src={imagenes[index]}
          alt="Imagen del gimnasio"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <button
          onClick={() => cambiarImagen('prev')}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={() => cambiarImagen('next')}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 rounded-full p-2 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <main className="flex flex-col items-center mt-12 px-4" data-aos="fade-up">
        <div className="max-w-lg text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Transforma tu cuerpo, mejora tu vida</h2>
          <p className="mt-4 text-lg text-gray-800">
            Únete a nuestra comunidad de fitness. Reserva tus horarios de entrenamiento y empieza a alcanzar tus metas.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-orange-500 text-white shadow-lg hover:bg-orange-600 px-6 py-2 rounded-full transition font-semibold"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="bg-orange-500 text-white shadow-lg hover:bg-orange-600 px-6 py-2 rounded-full transition font-semibold"
          >
            Registrarse
          </Link>
        </div>
      </main>

      <footer className="mt-12 p-4 text-center text-gray-700" data-aos="fade-in">
        <p>© 2025 Gimnasio BodyForge. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
