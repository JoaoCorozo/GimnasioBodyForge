import React, { useState } from "react";

const horariosIniciales = [
  {
    id: 1,
    inicio: "08:00",
    termino: "10:00",
    cupos: 5,
    reservado: false,
    clase: "Yoga",
    entrenador: "Carlos Gómez",
  },
  {
    id: 2,
    inicio: "10:00",
    termino: "12:00",
    cupos: 3,
    reservado: false,
    clase: "Pilates",
    entrenador: "Ana López",
  },
  {
    id: 3,
    inicio: "18:00",
    termino: "20:00",
    cupos: 2,
    reservado: false,
    clase: "Zumba",
    entrenador: "Luis Pérez",
  },
  {
    id: 4,
    inicio: "20:00",
    termino: "22:00",
    cupos: 0,
    reservado: false,
    clase: "Crossfit",
    entrenador: "Marcela Torres",
  },
];

const ClientDashboard = () => {
  const [horarios, setHorarios] = useState(horariosIniciales);

  const handleReservar = (id) => {
    setHorarios((prev) =>
      prev.map((h) =>
        h.id === id && h.cupos > 0 && !h.reservado
          ? { ...h, cupos: h.cupos - 1, reservado: true }
          : h
      )
    );
  };

  const handleCancelar = (id) => {
    setHorarios((prev) =>
      prev.map((h) =>
        h.id === id && h.reservado
          ? { ...h, cupos: h.cupos + 1, reservado: false }
          : h
      )
    );
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
        Reservas de Clases
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-orange-200">
            <tr>
              <th className="p-3 text-left">Clase</th>
              <th className="p-3 text-left">Entrenador</th>
              <th className="p-3 text-left">Inicio</th>
              <th className="p-3 text-left">Término</th>
              <th className="p-3 text-left">Cupos disponibles</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((horario) => (
              <tr key={horario.id} className="border-b">
                <td className="p-3">{horario.clase}</td>
                <td className="p-3">{horario.entrenador}</td>
                <td className="p-3">{horario.inicio}</td>
                <td className="p-3">{horario.termino}</td>
                <td className="p-3">{horario.cupos}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleReservar(horario.id)}
                    disabled={horario.cupos === 0 || horario.reservado}
                    className={`px-3 py-1 rounded text-white ${
                      horario.cupos === 0 || horario.reservado
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600"
                    }`}
                  >
                    Reservar
                  </button>
                  <button
                    onClick={() => handleCancelar(horario.id)}
                    disabled={!horario.reservado}
                    className={`px-3 py-1 rounded text-white ${
                      horario.reservado
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDashboard;
