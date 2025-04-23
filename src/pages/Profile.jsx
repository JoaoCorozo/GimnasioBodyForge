import React from "react";

const Profile = () => {
  // Datos de ejemplo, los cuales en una app real podrían venir de un servidor
  const cliente = {
    nombre: "Juan Pérez",
    correo: "juan@example.com",
    historialClases: [
      { clase: "Yoga", fecha: "2025-04-21", hora: "08:00 - 10:00" },
      { clase: "Pilates", fecha: "2025-04-22", hora: "10:00 - 12:00" },
    ],
  };

  return (
    <div className="p-6 min-h-screen bg-orange-50">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Mi Perfil</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Información Personal</h2>
        <p className="mt-2">Nombre: {cliente.nombre}</p>
        <p>Correo: {cliente.correo}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">Historial de Clases</h2>
        <ul className="mt-4">
          {cliente.historialClases.map((clase, index) => (
            <li key={index} className="mb-4">
              <span className="font-medium">{clase.clase}</span> - {clase.fecha} ({clase.hora})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
