import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Lunes", horas: 1.5 },
  { name: "Martes", horas: 2 },
  { name: "Miércoles", horas: 1 },
  { name: "Jueves", horas: 2.5 },
  { name: "Viernes", horas: 1.8 },
  { name: "Sábado", horas: 0.5 },
  { name: "Domingo", horas: 0 },
];

const Progreso = () => {
  return (
    <section className="mt-12 w-full max-w-3xl px-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Mi Progreso Semanal</h2>

      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <p className="text-gray-700 text-lg mb-4">
          ¡Buen trabajo! Has entrenado <span className="font-bold text-orange-600">9.3 horas</span> esta semana.
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="h" />
            <Tooltip />
            <Bar dataKey="horas" fill="#f97316" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
        <div className="bg-orange-100 p-4 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-orange-700">Calorías</h3>
          <p className="text-2xl font-bold mt-2">3,200 kcal</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-orange-700">Sesiones</h3>
          <p className="text-2xl font-bold mt-2">6</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-orange-700">Minutos activos</h3>
          <p className="text-2xl font-bold mt-2">560</p>
        </div>
      </div>
    </section>
  );
};

export default Progreso;
