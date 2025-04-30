// src/pages/Reservas.jsx
import { useState } from "react";
import { CheckCircle, XCircle, Users } from "lucide-react";

const clases = [
  {
    id: 1,
    horaInicio: "08:00",
    horaFin: "10:00",
    cupos: 5,
    clase: "Funcional",
    entrenador: "Carlos Ruiz",
    inscritos: ["Ana López", "Juan Pérez"],
    reservado: false,
  },
  {
    id: 2,
    horaInicio: "10:00",
    horaFin: "12:00",
    cupos: 0,
    clase: "HIIT",
    entrenador: "Laura Gómez",
    inscritos: ["Pedro Martínez", "Sofía Torres"],
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
            inscritos: clase.reservado
              ? clase.inscritos.slice(0, -1) // Simula eliminar al último inscrito
              : [...clase.inscritos, "Tú"], // Simula agregar al usuario actual
          }
        : clase
    );
    setClasesDisponibles(actualizadas);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-orange-400 to-orange-600 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Reservas de Clases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clasesDisponibles.map((clase) => (
          <div
            key={clase.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                {clase.clase}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Profesor:</strong> {clase.entrenador}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Horario:</strong> {clase.horaInicio} - {clase.horaFin}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Cupos:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    clase.cupos > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {clase.cupos} disponibles
                </span>
              </p>
              <div className="mb-4">
                <h4 className="text-gray-700 font-semibold mb-2">
                  Inscritos ({clase.inscritos.length}):
                </h4>
                {clase.inscritos.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-600">
                    {clase.inscritos.map((inscrito, index) => (
                      <li key={index}>{inscrito}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No hay inscritos aún.</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              {clase.reservado ? (
                <button
                  onClick={() => toggleReserva(clase.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                >
                  Cancelar Reserva
                </button>
              ) : (
                <button
                  onClick={() => toggleReserva(clase.id)}
                  className={`w-full ${
                    clase.cupos === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  } text-white py-2 rounded-lg font-semibold transition`}
                  disabled={clase.cupos === 0}
                >
                  Reservar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservas;
