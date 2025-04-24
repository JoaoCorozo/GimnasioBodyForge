import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Perfil = () => {
  const { user, logout } = useAuth();
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: "usuario@ejemplo.com", // Puedes cambiarlo por el email del usuario si lo tienes
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para actualizar los datos (con backend o almacenamiento local)
    alert("Datos actualizados correctamente.");
    setEditable(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-8">
      <header className="bg-orange-600 text-white w-full p-6 text-center">
        <h1 className="text-4xl font-bold">Perfil de {user.name}</h1>
      </header>

      <main className="w-full max-w-2xl mt-8 px-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Información Personal</h2>
          <form onSubmit={handleSaveChanges}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!editable}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!editable}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                Nueva contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                disabled={!editable}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setEditable(!editable)}
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
              >
                {editable ? "Cancelar" : "Editar"}
              </button>

              {editable && (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Guardar cambios
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="mt-8">
          <button
            onClick={logout}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
