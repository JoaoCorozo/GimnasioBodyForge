import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar el modo de edición
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: "",
    confirmPassword: "",
    profilePicture: user.profilePicture || "",
  }); // Estado para los datos editados

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirige al Home
  };

  const handleEdit = () => {
    setIsEditing(true); // Activa el modo de edición
  };

  const handleSave = () => {
    // Validar que las contraseñas coincidan
    if (form.password && form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    // Simula guardar los datos editados
    user.name = form.name;
    user.email = form.email;
    if (form.password) {
      user.password = form.password; // Simula el cambio de contraseña
    }
    if (form.profilePicture) {
      user.profilePicture = form.profilePicture; // Simula el cambio de foto de perfil
    }
    setIsEditing(false); // Desactiva el modo de edición
    alert("Datos actualizados correctamente");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm({ ...form, profilePicture: reader.result }); // Guarda la imagen como base64
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <p className="text-xl text-gray-700">Por favor, inicia sesión.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 overflow-hidden">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            ) : (
              user.name.charAt(0)
            )}
          </div>
          <h2 className="text-3xl font-bold text-orange-600 mb-2">
            {user.name}
          </h2>
          <p className="text-gray-600 mb-6">{user.email}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Información adicional
          </h3>
          <p className="text-gray-600">
            Aquí puedes agregar más detalles sobre el usuario, como su rol,
            preferencias o cualquier otra información relevante.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleEdit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Editar
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Modal para editar los datos */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
              Editar Perfil
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nueva contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Dejar en blanco para no cambiar"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirmar contraseña
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirma tu nueva contraseña"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="profilePicture"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Foto de perfil
                </label>
                <input
                  id="profilePicture"
                  name="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;
