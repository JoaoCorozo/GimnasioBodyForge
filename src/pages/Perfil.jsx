import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Perfil = () => {
  const { user, logout } = useAuth();
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: "usuario@ejemplo.com",
    password: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert("Datos actualizados correctamente.");
    setEditable(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-50 flex flex-col items-center py-8">
      <header className="bg-orange-500 text-white w-full p-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">Perfil de {user.name}</h1>
      </header>

      <main className="w-full max-w-2xl mt-10 px-6">
        <div
          className="bg-white p-10 rounded-3xl shadow-xl transition-all"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-semibold mb-6 text-orange-600">Información Personal</h2>

          <form onSubmit={handleSaveChanges} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-md text-gray-700 font-medium">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!editable}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-md text-gray-700 font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!editable}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-md text-gray-700 font-medium">
                Nueva contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                disabled={!editable}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setEditable(!editable)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition"
              >
                {editable ? "Cancelar" : "Editar"}
              </button>

              {editable && (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
                >
                  Guardar cambios
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="mt-10 text-center" data-aos="fade-up">
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition shadow"
          >
            Cerrar sesión
          </button>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
