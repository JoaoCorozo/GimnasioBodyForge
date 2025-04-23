// src/pages/Reservas.jsx
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const clases = [
  {
    id: 1,
    horaInicio: "08:00",
    horaFin: "10:00",
    cupos: 5,
    clase: "Funcional",
    entrenador: "Carlos Ruiz",
    reservado: false,
  },
  {
    id: 2,
    horaInicio: "10:00",
    horaFin: "12:00",
    cupos: 0,
    clase: "HIIT",
    entrenador: "Laura Gómez",
    reservado: true,
  },
];

const Reservas = () => {
  const [clasesDisponibles, setClasesDisponibles] = useState(clases);

  const toggleReserva = (id) => {
    const actualizadas = clasesDisponibles.map((clase) =>
      clase.id === id
        ? {
            ...clase,
            reservado: !clase.reservado,
            cupos: clase.reservado ? clase.cupos + 1 : clase.cupos - 1,
          }
        : clase
    );
    setClasesDisponibles(actualizadas);
  };

  const reservasActivas = clasesDisponibles.filter((c) => c.reservado).length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reservas de Clases</h2>

      <div className="mb-4 text-sm text-gray-600">
        Tienes <span className="font-semibold">{reservasActivas}</span> reservas activas.
      </div>

      <table className="w-full text-left border border-gray-200 shadow-md rounded-xl overflow-hidden">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="p-3">Clase</th>
            <th className="p-3">Entrenador</th>
            <th className="p-3">Horario</th>
            <th className="p-3">Cupos</th>
            <th className="p-3">Estado</th>
            <th className="p-3 text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {clasesDisponibles.map((clase) => (
            <tr
              key={clase.id}
              className={`border-t ${
                clase.reservado ? "bg-orange-100" : "bg-white"
              } transition-colors duration-300`}
            >
              <td className="p-3">{clase.clase}</td>
              <td className="p-3">{clase.entrenador}</td>
              <td className="p-3">
                {clase.horaInicio} - {clase.horaFin}
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    clase.cupos > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {clase.cupos} cupos
                </span>
              </td>
              <td className="p-3">
                {clase.cupos > 0 ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </td>
              <td className="p-3 text-center">
                {clase.reservado ? (
                  <button
                    onClick={() => toggleReserva(clase.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
                  >
                    Cancelar
                  </button>
                ) : (
                  <button
                    onClick={() => toggleReserva(clase.id)}
                    className={`${
                      clase.cupos === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600"
                    } text-white px-3 py-1 rounded-lg text-sm transition`}
                    disabled={clase.cupos === 0}
                  >
                    Reservar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservas;
